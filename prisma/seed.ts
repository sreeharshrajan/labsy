import { PrismaClient } from "@prisma/client";
import { users } from "./seeders/index.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  await (users as (prisma: PrismaClient) => Promise<void>)(prisma);

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
