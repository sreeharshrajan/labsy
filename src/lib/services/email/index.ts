import nodemailer from 'nodemailer';
import { env } from '@/lib/env';

// SMTP configuration
let transporter: nodemailer.Transporter | null = null;

// Initialize transporter only if SMTP is configured
if (env.SMTP_USER && env.SMTP_PASS) {
  try {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(env.SMTP_PORT || '587'),
      secure: env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  } catch (error) {
    console.error('Failed to create SMTP transporter:', error);
  }
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  // Check if SMTP is configured
  if (!transporter) {
    console.log('SMTP not configured. Email would be sent to:', to);
    console.log('Subject:', subject);
    const linkMatch = /https?:\/\/[^\s"']+/.exec(html);
    console.log('Reset link:', linkMatch?.[0] || 'No link found');
    return { success: true, messageId: 'dev-mode', message: 'SMTP not configured - email logged to console' };
  }

  try {
    const mailOptions = {
      from: `"MedLaby" <${env.SMTP_FROM || env.SMTP_USER}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendPasswordResetEmail(email: string, resetToken: string) {
  const resetUrl = `${env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset - MedLaby</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #2e026d, #15162c);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 0 0 8px 8px;
        }
        .button {
          display: inline-block;
          background: #4f46e5;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin: 20px 0;
        }
        .button:hover {
          background: #4338ca;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          color: #666;
          font-size: 14px;
        }
        .warning {
          background: #fef3cd;
          border: 1px solid #fecaca;
          color: #92400e;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>MedLaby</h1>
        <p>Password Reset Request</p>
      </div>
      
      <div class="content">
        <h2>Reset Your Password</h2>
        <p>You requested to reset your password for your MedLaby account. Click the button below to set a new password:</p>
        
        <div style="text-align: center;">
          <a href="${resetUrl}" class="button">Reset Password</a>
        </div>
        
        <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
        <p style="word-break: break-all; background: #f0f0f0; padding: 10px; border-radius: 4px;">
          ${resetUrl}
        </p>
        
        <div class="warning">
          <strong>Important:</strong> This link will expire in 1 hour for security reasons. If you didn't request this password reset, please ignore this email.
        </div>
        
        <p>If you have any questions, please contact our support team.</p>
        
        <p>Best regards,<br>The MedLaby Team</p>
      </div>
      
      <div class="footer">
        <p>This email was sent from MedLaby - Laboratory Management System</p>
        <p>© ${new Date().getFullYear()} MedLaby. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({
    to: email,
    subject: 'Password Reset Request - MedLaby',
    html,
  });
}
