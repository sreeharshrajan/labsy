import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/server/db';
import bcrypt from 'bcryptjs';

const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { token, password } = resetPasswordSchema.parse(body);

    // Find user with valid reset token
    const user = await db.user.findFirst({
      where: {
        passwordResetToken: token,
        passwordResetExpires: {
          gt: new Date(), // Token not expired
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    // Check if user is active
    if (user.status !== 'ACTIVE') {
      return NextResponse.json(
        { error: 'Account is not active' },
        { status: 400 }
      );
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(password, 12);

    // Update user password and clear reset token
    await db.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    });

    return NextResponse.json(
      { message: 'Password has been reset successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Reset password error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message ?? 'Invalid input' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
