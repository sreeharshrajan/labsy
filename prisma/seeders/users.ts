import bcrypt from "bcryptjs";
import type { PrismaClient } from "@prisma/client";

export async function users(prisma: PrismaClient) {
  console.log("👤 Seeding users...");

  const hashedPassword = await bcrypt.hash("admin123", 12);

  // Create super admin user
  const superAdmin = await prisma.user.upsert({
    where: { email: "admin@medlaby.com" },
    update: {},
    create: {
      email: "admin@medlaby.com",
      passwordHash: hashedPassword,
      name: "Super Admin",
      isSuperAdmin: true,
      status: "ACTIVE",
    },
  });

  console.log(`✅ Created superadmin user: ${superAdmin.email}`);

  // Create a test tenant and regular user
  const testTenant = await prisma.tenant.upsert({
    where: { slug: "test-lab" },
    update: {},
    create: {
      name: "Test Laboratory",
      slug: "test-lab",
      contactEmail: "test@medlaby.com",
      isActive: true,
    },
  });

  const testUser = await prisma.user.upsert({
    where: { email: "test@medlaby.com" },
    update: {},
    create: {
      email: "test@medlaby.com",
      passwordHash: hashedPassword,
      name: "Test User",
      isSuperAdmin: false,
      status: "ACTIVE",
    },
  });

  // Create tenant user relationship
  const tenantUser = await prisma.tenantUser.upsert({
    where: { userId_tenantId: { userId: testUser.id, tenantId: testTenant.id } },
    update: {},
    create: {
      userId: testUser.id,
      tenantId: testTenant.id,
    },
  });

  // Create owner role for the tenant
  const ownerRole = await prisma.tenantRole.upsert({
    where: { tenantId_name: { tenantId: testTenant.id, name: "OWNER" } },
    update: {},
    create: {
      name: "OWNER",
      description: "Tenant owner with full access",
      isSystem: true,
      tenantId: testTenant.id,
    },
  });

  // Assign owner role to the test user
  await prisma.tenantUserRole.upsert({
    where: { tenantUserId_roleId: { tenantUserId: tenantUser.id, roleId: ownerRole.id } },
    update: {},
    create: {
      tenantUserId: tenantUser.id,
      roleId: ownerRole.id,
    },
  });

  console.log(`✅ Created test user: ${testUser.email}`);
  console.log(`✅ Created test tenant: ${testTenant.name}`);
}

