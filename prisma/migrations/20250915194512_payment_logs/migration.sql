/*
  Warnings:

  - The `action` column on the `AuditLog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `changes` on the `SyncLog` table. All the data in the column will be lost.
  - Added the required column `commissionAmt` to the `DoctorCommissionLog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."DoctorCommissionStatus" AS ENUM ('PENDING', 'PAID', 'FAILED');

-- CreateEnum
CREATE TYPE "public"."AuditLogAction" AS ENUM ('CREATED', 'UPDATED', 'DELETED', 'VIEWED', 'APPROVED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."SyncStatus" ADD VALUE 'CONFLICT';
ALTER TYPE "public"."SyncStatus" ADD VALUE 'RESOLVED';
ALTER TYPE "public"."SyncStatus" ADD VALUE 'PROCESSING';

-- AlterTable
ALTER TABLE "public"."AuditLog" ADD COLUMN     "entity" TEXT,
ADD COLUMN     "entityId" TEXT,
ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "userAgent" TEXT,
DROP COLUMN "action",
ADD COLUMN     "action" "public"."AuditLogAction" NOT NULL DEFAULT 'CREATED';

-- AlterTable
ALTER TABLE "public"."DoctorCommissionLog" ADD COLUMN     "commissionAmt" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "commissionStatus" "public"."DoctorCommissionStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "reportDetailId" TEXT;

-- AlterTable
ALTER TABLE "public"."SyncLog" DROP COLUMN "changes",
ADD COLUMN     "details" JSONB,
ADD COLUMN     "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "public"."Notification" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "userId" TEXT,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readAt" TIMESTAMP(3),

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AuditLog_action_idx" ON "public"."AuditLog"("action");

-- CreateIndex
CREATE INDEX "AuditLog_tenantId_action_idx" ON "public"."AuditLog"("tenantId", "action");

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorCommissionLog" ADD CONSTRAINT "DoctorCommissionLog_reportDetailId_fkey" FOREIGN KEY ("reportDetailId") REFERENCES "public"."ReportDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
