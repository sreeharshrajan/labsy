/*
  Warnings:

  - You are about to drop the column `changedBy` on the `ReportDetail` table. All the data in the column will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InvoiceItem` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `serviceId` on table `ReportTemplate` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "public"."ReportChangeLogAction" AS ENUM ('CREATED', 'UPDATED', 'APPROVED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "public"."DoctorCommissionLog" DROP CONSTRAINT "DoctorCommissionLog_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_customerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "public"."InvoiceItem" DROP CONSTRAINT "InvoiceItem_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."InvoiceItem" DROP CONSTRAINT "InvoiceItem_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Report" DROP CONSTRAINT "Report_invoiceId_fkey";

-- DropIndex
DROP INDEX "public"."Report_createdAt_idx";

-- DropIndex
DROP INDEX "public"."Report_customerId_idx";

-- DropIndex
DROP INDEX "public"."Report_tenantId_status_idx";

-- DropIndex
DROP INDEX "public"."ReportTemplate_isActive_idx";

-- DropIndex
DROP INDEX "public"."ReportTemplate_name_idx";

-- AlterTable
ALTER TABLE "public"."ReportChangeLog" ADD COLUMN     "action" "public"."ReportChangeLogAction" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "public"."ReportDetail" DROP COLUMN "changedBy",
ADD COLUMN     "amount" DOUBLE PRECISION,
ADD COLUMN     "reportTemplateId" TEXT;

-- AlterTable
ALTER TABLE "public"."ReportTemplate" ADD COLUMN     "reference" TEXT,
ADD COLUMN     "unit" TEXT,
ALTER COLUMN "serviceId" SET NOT NULL;

-- DropTable
DROP TABLE "public"."Invoice";

-- DropTable
DROP TABLE "public"."InvoiceItem";

-- CreateTable
CREATE TABLE "public"."ReportInvoice" (
    "id" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netAmount" DOUBLE PRECISION NOT NULL,
    "paymentType" "public"."PaymentType" NOT NULL,
    "status" "public"."InvoiceStatus" NOT NULL DEFAULT 'PAID',
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "tenantId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "doctorId" TEXT,
    "serviceId" TEXT,

    CONSTRAINT "ReportInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportInvoiceItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invoiceId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ReportInvoiceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportInvoicePayment" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "method" "public"."PaymentMethod" NOT NULL,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "referenceNo" TEXT,
    "transactionId" TEXT,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "invoiceId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "ReportInvoicePayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ReportInvoice_tenantId_idx" ON "public"."ReportInvoice"("tenantId");

-- CreateIndex
CREATE INDEX "ReportInvoice_customerId_idx" ON "public"."ReportInvoice"("customerId");

-- CreateIndex
CREATE INDEX "ReportInvoice_doctorId_idx" ON "public"."ReportInvoice"("doctorId");

-- CreateIndex
CREATE INDEX "ReportInvoice_issuedAt_idx" ON "public"."ReportInvoice"("issuedAt");

-- CreateIndex
CREATE INDEX "ReportInvoice_status_idx" ON "public"."ReportInvoice"("status");

-- CreateIndex
CREATE INDEX "ReportInvoice_deletedAt_idx" ON "public"."ReportInvoice"("deletedAt");

-- CreateIndex
CREATE INDEX "ReportInvoiceItem_invoiceId_idx" ON "public"."ReportInvoiceItem"("invoiceId");

-- CreateIndex
CREATE INDEX "ReportInvoiceItem_serviceId_idx" ON "public"."ReportInvoiceItem"("serviceId");

-- CreateIndex
CREATE INDEX "ReportInvoicePayment_invoiceId_idx" ON "public"."ReportInvoicePayment"("invoiceId");

-- CreateIndex
CREATE INDEX "ReportInvoicePayment_tenantId_idx" ON "public"."ReportInvoicePayment"("tenantId");

-- CreateIndex
CREATE INDEX "ReportInvoicePayment_status_idx" ON "public"."ReportInvoicePayment"("status");

-- CreateIndex
CREATE INDEX "ReportInvoicePayment_paidAt_idx" ON "public"."ReportInvoicePayment"("paidAt");

-- CreateIndex
CREATE INDEX "ReportInvoicePayment_referenceNo_idx" ON "public"."ReportInvoicePayment"("referenceNo");

-- CreateIndex
CREATE INDEX "ReportInvoicePayment_transactionId_idx" ON "public"."ReportInvoicePayment"("transactionId");

-- CreateIndex
CREATE INDEX "ReportInvoicePayment_deletedAt_idx" ON "public"."ReportInvoicePayment"("deletedAt");

-- CreateIndex
CREATE INDEX "Report_tenantId_idx" ON "public"."Report"("tenantId");

-- CreateIndex
CREATE INDEX "Report_doctorId_idx" ON "public"."Report"("doctorId");

-- CreateIndex
CREATE INDEX "Report_status_idx" ON "public"."Report"("status");

-- AddForeignKey
ALTER TABLE "public"."DoctorCommissionLog" ADD CONSTRAINT "DoctorCommissionLog_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."ReportInvoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoice" ADD CONSTRAINT "ReportInvoice_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoice" ADD CONSTRAINT "ReportInvoice_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoice" ADD CONSTRAINT "ReportInvoice_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoice" ADD CONSTRAINT "ReportInvoice_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoiceItem" ADD CONSTRAINT "ReportInvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."ReportInvoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoiceItem" ADD CONSTRAINT "ReportInvoiceItem_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoicePayment" ADD CONSTRAINT "ReportInvoicePayment_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."ReportInvoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportInvoicePayment" ADD CONSTRAINT "ReportInvoicePayment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."ReportInvoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportChangeLog" ADD CONSTRAINT "ReportChangeLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportDetail" ADD CONSTRAINT "ReportDetail_reportTemplateId_fkey" FOREIGN KEY ("reportTemplateId") REFERENCES "public"."ReportTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
