import { PrismaClient } from "@prisma/client";
import { users } from "./seeders/index.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");
  // 0. Clear old data
  console.log('🧹 Clearing old data...');
  await prisma.user.deleteMany();
  console.log('✅ Cleared old data!');

  await (users as (prisma: PrismaClient) => Promise<void>)(prisma);

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
