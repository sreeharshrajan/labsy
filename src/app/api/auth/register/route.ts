import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { db } from '@/server/db';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, tenantName, tenantSlug } = body;

    // Validate input
    if (!name || !email || !password || !tenantName || !tenantSlug) {
      return NextResponse.json(
        { error: 'Name, email, password, tenant name, and tenant slug are required' },
        { status: 400 }
      );
    }

    // Validate password
    const passwordErrors: string[] = [];
    
    if (password.length < 8) {
      passwordErrors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      passwordErrors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      passwordErrors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      passwordErrors.push('Password must contain at least one special character');
    }
    
    if (passwordErrors.length > 0) {
      return NextResponse.json(
        { error: 'Password validation failed', details: passwordErrors },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Check if tenant slug is already taken
    const existingTenant = await db.tenant.findUnique({
      where: { slug: tenantSlug },
    });

    if (existingTenant) {
      return NextResponse.json(
        { error: 'Tenant slug is already taken' },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user and tenant in a transaction
    const result = await db.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          name,
          email: email.toLowerCase(),
          passwordHash,
          isSuperAdmin: false,
          status: 'ACTIVE',
        },
      });

      // Create tenant
      const tenant = await tx.tenant.create({
        data: {
          name: tenantName,
          slug: tenantSlug,
          contactEmail: email.toLowerCase(),
          isActive: true,
        },
      });

      // Create tenant user relationship
      const tenantUser = await tx.tenantUser.create({
        data: {
          userId: user.id,
          tenantId: tenant.id,
        },
      });

      // Create default owner role for the tenant
      const ownerRole = await tx.tenantRole.create({
        data: {
          name: 'OWNER',
          description: 'Tenant owner with full access',
          isSystem: true,
          tenantId: tenant.id,
        },
      });

      // Assign owner role to the user
      await tx.tenantUserRole.create({
        data: {
          tenantUserId: tenantUser.id,
          roleId: ownerRole.id,
        },
      });

      // Create basic permissions for the owner role
      const permissions = [
        { action: 'create', resource: 'Report' },
        { action: 'read', resource: 'Report' },
        { action: 'update', resource: 'Report' },
        { action: 'delete', resource: 'Report' },
        { action: 'create', resource: 'Customer' },
        { action: 'read', resource: 'Customer' },
        { action: 'update', resource: 'Customer' },
        { action: 'delete', resource: 'Customer' },
        { action: 'create', resource: 'Doctor' },
        { action: 'read', resource: 'Doctor' },
        { action: 'update', resource: 'Doctor' },
        { action: 'delete', resource: 'Doctor' },
        { action: 'create', resource: 'Service' },
        { action: 'read', resource: 'Service' },
        { action: 'update', resource: 'Service' },
        { action: 'delete', resource: 'Service' },
        { action: 'read', resource: 'User' },
        { action: 'update', resource: 'User' },
        { action: 'create', resource: 'Role' },
        { action: 'read', resource: 'Role' },
        { action: 'update', resource: 'Role' },
        { action: 'delete', resource: 'Role' },
      ];

      for (const permission of permissions) {
        await tx.tenantPermission.create({
          data: {
            action: permission.action,
            resource: permission.resource,
            roleId: ownerRole.id,
          },
        });
      }

      return { user, tenant, tenantUser, ownerRole };
    });

    // Return success message
    return NextResponse.json({
      message: 'Account created successfully. You can now sign in.',
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
      },
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}