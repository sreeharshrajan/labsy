import * as bcrypt from "bcrypt";
import type { PrismaClient } from "@prisma/client";

export async function users(prisma: PrismaClient) {
  console.log("👤 Seeding users...");

  const hashedPassword = await bcrypt.hash("admin123", 12);

  const superAdmin = await prisma.user.upsert({
    where: { email: "sreeharshkrajan@gmail.com" },
    update: {},
    create: {
      email: "sreeharshkrajan@gmail.com",
      passwordHash: hashedPassword,
      name: "Super Admin",
      isSuperAdmin: true,
      status: "ACTIVE",
    },
  });

  console.log(`✅ Created superadmin user: ${superAdmin.email}`);
}

