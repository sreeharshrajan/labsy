/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."SubscriptionPlan" AS ENUM ('STARTER', 'GROWTH', 'ENTERPRISE', 'ONE_TIME');

-- CreateEnum
CREATE TYPE "public"."SubscriptionStatus" AS ENUM ('ACTIVE', 'TRIAL', 'CANCELED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('OWNER', 'ADMIN', 'STAFF', 'VIEWER');

-- CreateEnum
CREATE TYPE "public"."UserTitle" AS ENUM ('MR', 'MRS', 'MS', 'DR', 'PROF');

-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING', 'DELETED');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."TenantStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING', 'DELETED');

-- CreateEnum
CREATE TYPE "public"."DoctorStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "public"."BloodGroup" AS ENUM ('A_POSITIVE', 'A_NEGATIVE', 'B_POSITIVE', 'B_NEGATIVE', 'AB_POSITIVE', 'AB_NEGATIVE', 'O_POSITIVE', 'O_NEGATIVE');

-- CreateEnum
CREATE TYPE "public"."CustomerType" AS ENUM ('REFERRED', 'SELF', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."ReportStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'DELIVERED');

-- CreateEnum
CREATE TYPE "public"."PaymentType" AS ENUM ('CASH', 'UPI');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('CASH', 'BANK_TRANSFER', 'UPI');

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED');

-- CreateEnum
CREATE TYPE "public"."InvoiceStatus" AS ENUM ('PAID', 'UNPAID', 'PARTIAL', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."SyncOperation" AS ENUM ('CREATE', 'UPDATE', 'DELETE');

-- CreateEnum
CREATE TYPE "public"."SyncStatus" AS ENUM ('PENDING', 'SYNCED', 'FAILED');

-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_createdById_fkey";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "emailVerified",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "isSuperAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "passwordHash" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "status" "public"."UserStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userTitle" "public"."UserTitle" DEFAULT 'MR';

-- DropTable
DROP TABLE "public"."Post";

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SystemRoleTemplate" (
    "id" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'STAFF',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SystemRoleTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SystemPermission" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "conditions" JSONB,
    "roleTemplateId" TEXT NOT NULL,

    CONSTRAINT "SystemPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "labLicenseNumber" TEXT,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT,
    "gstin" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "canManageRoles" BOOLEAN NOT NULL DEFAULT true,
    "maxCustomRoles" INTEGER NOT NULL DEFAULT 3,
    "maxUsers" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TenantAddress" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TenantAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserAddress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TenantRole" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "systemRoleTemplateId" TEXT,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "TenantRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TenantPermission" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "TenantPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TenantUserRole" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tenantUserId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "TenantUserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TenantUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "TenantUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" TEXT NOT NULL,
    "plan" "public"."SubscriptionPlan" NOT NULL DEFAULT 'STARTER',
    "status" "public"."SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "renewalDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stripeId" TEXT,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AuditLog" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tenantId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SyncLog" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "changes" JSONB NOT NULL,
    "status" "public"."SyncStatus" NOT NULL DEFAULT 'PENDING',
    "operation" "public"."SyncOperation" NOT NULL DEFAULT 'UPDATE',
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SyncLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ServiceCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "ServiceCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "tenantId" TEXT NOT NULL,
    "categoryId" TEXT,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Customer" (
    "id" TEXT NOT NULL,
    "title" "public"."UserTitle" DEFAULT 'MR',
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "gender" "public"."Gender",
    "bloodGroup" "public"."BloodGroup",
    "maritalStatus" "public"."MaritalStatus",
    "aadharNumber" TEXT,
    "panNumber" TEXT,
    "passportNumber" TEXT,
    "knownAllergies" TEXT[],
    "chronicConditions" TEXT[],
    "medications" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CustomerAddress" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialization" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "registrationNo" TEXT,
    "clinicName" TEXT,
    "department" TEXT,
    "status" "public"."DoctorStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DoctorAddress" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "DoctorAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DoctorCommission" (
    "id" TEXT NOT NULL,
    "commissionType" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "DoctorCommission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DoctorCommissionLog" (
    "id" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "invoiceId" TEXT,
    "commissionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DoctorCommissionLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DoctorCommissionPayment" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentMethod" "public"."PaymentMethod" NOT NULL,
    "referenceNo" TEXT,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "DoctorCommissionPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Invoice" (
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
    "invoiceNumber" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "doctorId" TEXT,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InvoiceItem" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "invoiceId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "InvoiceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportTemplate" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "tenantId" TEXT NOT NULL,
    "serviceId" TEXT,

    CONSTRAINT "ReportTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportParameter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT,
    "method" TEXT,
    "turnaroundTime" INTEGER,
    "isCritical" BOOLEAN NOT NULL DEFAULT false,
    "criticalLow" DOUBLE PRECISION,
    "criticalHigh" DOUBLE PRECISION,
    "genderSpecific" BOOLEAN NOT NULL DEFAULT false,
    "ageSpecific" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "referenceMin" DOUBLE PRECISION,
    "referenceMax" DOUBLE PRECISION,
    "gender" "public"."Gender",
    "ageMin" INTEGER,
    "ageMax" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "templateId" TEXT NOT NULL,

    CONSTRAINT "ReportParameter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Report" (
    "id" TEXT NOT NULL,
    "reportCode" TEXT,
    "fileUrl" TEXT,
    "collectedPlace" TEXT,
    "notes" TEXT,
    "status" "public"."ReportStatus" NOT NULL DEFAULT 'PENDING',
    "customerType" "public"."CustomerType",
    "issuedAt" TIMESTAMP(3),
    "collectedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "version" INTEGER NOT NULL DEFAULT 1,
    "tenantId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "doctorId" TEXT,
    "invoiceId" TEXT NOT NULL,
    "createdBy" TEXT,
    "collectedBy" TEXT,
    "customerAddressId" TEXT,
    "labAddressId" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportChangeLog" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "changedById" TEXT NOT NULL,
    "editVersion" INTEGER NOT NULL,
    "changes" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "conflictResolved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ReportChangeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ReportDetail" (
    "id" TEXT NOT NULL,
    "parameterName" TEXT,
    "parameterUnit" TEXT,
    "parameterReferenceMin" DOUBLE PRECISION,
    "parameterReferenceMax" DOUBLE PRECISION,
    "resultText" TEXT,
    "resultValue" DOUBLE PRECISION,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastEditedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedBy" TEXT,
    "deletedAt" TIMESTAMP(3),
    "reportId" TEXT NOT NULL,
    "parameterId" TEXT NOT NULL,
    "serviceId" TEXT,

    CONSTRAINT "ReportDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SystemRoleTemplate_name_key" ON "public"."SystemRoleTemplate"("name");

-- CreateIndex
CREATE INDEX "SystemRoleTemplate_isDefault_idx" ON "public"."SystemRoleTemplate"("isDefault");

-- CreateIndex
CREATE UNIQUE INDEX "SystemPermission_roleTemplateId_action_resource_key" ON "public"."SystemPermission"("roleTemplateId", "action", "resource");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_slug_key" ON "public"."Tenant"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_labLicenseNumber_key" ON "public"."Tenant"("labLicenseNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_contactEmail_key" ON "public"."Tenant"("contactEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_contactPhone_key" ON "public"."Tenant"("contactPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_gstin_key" ON "public"."Tenant"("gstin");

-- CreateIndex
CREATE INDEX "Tenant_slug_idx" ON "public"."Tenant"("slug");

-- CreateIndex
CREATE INDEX "Tenant_isActive_idx" ON "public"."Tenant"("isActive");

-- CreateIndex
CREATE INDEX "Tenant_createdAt_idx" ON "public"."Tenant"("createdAt");

-- CreateIndex
CREATE INDEX "Tenant_deletedAt_idx" ON "public"."Tenant"("deletedAt");

-- CreateIndex
CREATE INDEX "TenantAddress_tenantId_idx" ON "public"."TenantAddress"("tenantId");

-- CreateIndex
CREATE INDEX "TenantAddress_addressId_idx" ON "public"."TenantAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantAddress_tenantId_addressId_key" ON "public"."TenantAddress"("tenantId", "addressId");

-- CreateIndex
CREATE INDEX "UserAddress_userId_idx" ON "public"."UserAddress"("userId");

-- CreateIndex
CREATE INDEX "UserAddress_addressId_idx" ON "public"."UserAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAddress_userId_addressId_key" ON "public"."UserAddress"("userId", "addressId");

-- CreateIndex
CREATE INDEX "TenantRole_tenantId_idx" ON "public"."TenantRole"("tenantId");

-- CreateIndex
CREATE INDEX "TenantRole_isSystem_idx" ON "public"."TenantRole"("isSystem");

-- CreateIndex
CREATE UNIQUE INDEX "TenantRole_tenantId_name_key" ON "public"."TenantRole"("tenantId", "name");

-- CreateIndex
CREATE INDEX "TenantPermission_action_idx" ON "public"."TenantPermission"("action");

-- CreateIndex
CREATE INDEX "TenantPermission_resource_idx" ON "public"."TenantPermission"("resource");

-- CreateIndex
CREATE UNIQUE INDEX "TenantPermission_roleId_action_resource_key" ON "public"."TenantPermission"("roleId", "action", "resource");

-- CreateIndex
CREATE INDEX "TenantUserRole_tenantUserId_idx" ON "public"."TenantUserRole"("tenantUserId");

-- CreateIndex
CREATE INDEX "TenantUserRole_roleId_idx" ON "public"."TenantUserRole"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "TenantUserRole_tenantUserId_roleId_key" ON "public"."TenantUserRole"("tenantUserId", "roleId");

-- CreateIndex
CREATE INDEX "TenantUser_userId_idx" ON "public"."TenantUser"("userId");

-- CreateIndex
CREATE INDEX "TenantUser_tenantId_idx" ON "public"."TenantUser"("tenantId");

-- CreateIndex
CREATE INDEX "TenantUser_createdAt_idx" ON "public"."TenantUser"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "TenantUser_userId_tenantId_key" ON "public"."TenantUser"("userId", "tenantId");

-- CreateIndex
CREATE INDEX "Subscription_tenantId_idx" ON "public"."Subscription"("tenantId");

-- CreateIndex
CREATE INDEX "Subscription_status_idx" ON "public"."Subscription"("status");

-- CreateIndex
CREATE INDEX "Subscription_startDate_idx" ON "public"."Subscription"("startDate");

-- CreateIndex
CREATE INDEX "Subscription_plan_status_idx" ON "public"."Subscription"("plan", "status");

-- CreateIndex
CREATE INDEX "AuditLog_tenantId_idx" ON "public"."AuditLog"("tenantId");

-- CreateIndex
CREATE INDEX "AuditLog_action_idx" ON "public"."AuditLog"("action");

-- CreateIndex
CREATE INDEX "AuditLog_createdAt_idx" ON "public"."AuditLog"("createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_tenantId_action_idx" ON "public"."AuditLog"("tenantId", "action");

-- CreateIndex
CREATE INDEX "AuditLog_tenantId_createdAt_idx" ON "public"."AuditLog"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "SyncLog_tenantId_idx" ON "public"."SyncLog"("tenantId");

-- CreateIndex
CREATE INDEX "SyncLog_entity_idx" ON "public"."SyncLog"("entity");

-- CreateIndex
CREATE INDEX "SyncLog_syncedAt_idx" ON "public"."SyncLog"("syncedAt");

-- CreateIndex
CREATE INDEX "SyncLog_tenantId_entity_idx" ON "public"."SyncLog"("tenantId", "entity");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_slug_key" ON "public"."ServiceCategory"("slug");

-- CreateIndex
CREATE INDEX "ServiceCategory_tenantId_idx" ON "public"."ServiceCategory"("tenantId");

-- CreateIndex
CREATE INDEX "ServiceCategory_slug_idx" ON "public"."ServiceCategory"("slug");

-- CreateIndex
CREATE INDEX "ServiceCategory_deletedAt_idx" ON "public"."ServiceCategory"("deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Service_code_key" ON "public"."Service"("code");

-- CreateIndex
CREATE INDEX "Service_tenantId_idx" ON "public"."Service"("tenantId");

-- CreateIndex
CREATE INDEX "Service_categoryId_idx" ON "public"."Service"("categoryId");

-- CreateIndex
CREATE INDEX "Service_code_idx" ON "public"."Service"("code");

-- CreateIndex
CREATE INDEX "Service_isActive_idx" ON "public"."Service"("isActive");

-- CreateIndex
CREATE INDEX "Service_price_idx" ON "public"."Service"("price");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_aadharNumber_key" ON "public"."Customer"("aadharNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_panNumber_key" ON "public"."Customer"("panNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_passportNumber_key" ON "public"."Customer"("passportNumber");

-- CreateIndex
CREATE INDEX "Customer_tenantId_idx" ON "public"."Customer"("tenantId");

-- CreateIndex
CREATE INDEX "Customer_email_idx" ON "public"."Customer"("email");

-- CreateIndex
CREATE INDEX "Customer_phone_idx" ON "public"."Customer"("phone");

-- CreateIndex
CREATE INDEX "Customer_name_idx" ON "public"."Customer"("name");

-- CreateIndex
CREATE INDEX "Customer_deletedAt_idx" ON "public"."Customer"("deletedAt");

-- CreateIndex
CREATE INDEX "CustomerAddress_customerId_idx" ON "public"."CustomerAddress"("customerId");

-- CreateIndex
CREATE INDEX "CustomerAddress_addressId_idx" ON "public"."CustomerAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerAddress_customerId_addressId_key" ON "public"."CustomerAddress"("customerId", "addressId");

-- CreateIndex
CREATE INDEX "Doctor_tenantId_idx" ON "public"."Doctor"("tenantId");

-- CreateIndex
CREATE INDEX "Doctor_email_idx" ON "public"."Doctor"("email");

-- CreateIndex
CREATE INDEX "Doctor_phone_idx" ON "public"."Doctor"("phone");

-- CreateIndex
CREATE INDEX "Doctor_registrationNo_idx" ON "public"."Doctor"("registrationNo");

-- CreateIndex
CREATE INDEX "Doctor_specialization_idx" ON "public"."Doctor"("specialization");

-- CreateIndex
CREATE INDEX "DoctorAddress_doctorId_idx" ON "public"."DoctorAddress"("doctorId");

-- CreateIndex
CREATE INDEX "DoctorAddress_addressId_idx" ON "public"."DoctorAddress"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "DoctorAddress_doctorId_addressId_key" ON "public"."DoctorAddress"("doctorId", "addressId");

-- CreateIndex
CREATE INDEX "DoctorCommission_doctorId_idx" ON "public"."DoctorCommission"("doctorId");

-- CreateIndex
CREATE INDEX "DoctorCommission_isActive_idx" ON "public"."DoctorCommission"("isActive");

-- CreateIndex
CREATE INDEX "DoctorCommission_commissionType_idx" ON "public"."DoctorCommission"("commissionType");

-- CreateIndex
CREATE INDEX "DoctorCommission_value_idx" ON "public"."DoctorCommission"("value");

-- CreateIndex
CREATE INDEX "DoctorCommissionLog_doctorId_idx" ON "public"."DoctorCommissionLog"("doctorId");

-- CreateIndex
CREATE INDEX "DoctorCommissionLog_invoiceId_idx" ON "public"."DoctorCommissionLog"("invoiceId");

-- CreateIndex
CREATE INDEX "DoctorCommissionLog_commissionId_idx" ON "public"."DoctorCommissionLog"("commissionId");

-- CreateIndex
CREATE INDEX "DoctorCommissionLog_createdAt_idx" ON "public"."DoctorCommissionLog"("createdAt");

-- CreateIndex
CREATE INDEX "DoctorCommissionLog_updatedAt_idx" ON "public"."DoctorCommissionLog"("updatedAt");

-- CreateIndex
CREATE INDEX "DoctorCommissionPayment_doctorId_idx" ON "public"."DoctorCommissionPayment"("doctorId");

-- CreateIndex
CREATE INDEX "DoctorCommissionPayment_paymentDate_idx" ON "public"."DoctorCommissionPayment"("paymentDate");

-- CreateIndex
CREATE INDEX "DoctorCommissionPayment_status_idx" ON "public"."DoctorCommissionPayment"("status");

-- CreateIndex
CREATE INDEX "DoctorCommissionPayment_referenceNo_idx" ON "public"."DoctorCommissionPayment"("referenceNo");

-- CreateIndex
CREATE INDEX "DoctorCommissionPayment_createdAt_idx" ON "public"."DoctorCommissionPayment"("createdAt");

-- CreateIndex
CREATE INDEX "DoctorCommissionPayment_updatedAt_idx" ON "public"."DoctorCommissionPayment"("updatedAt");

-- CreateIndex
CREATE INDEX "DoctorCommissionPayment_deletedAt_idx" ON "public"."DoctorCommissionPayment"("deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "public"."Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "Invoice_tenantId_idx" ON "public"."Invoice"("tenantId");

-- CreateIndex
CREATE INDEX "Invoice_customerId_idx" ON "public"."Invoice"("customerId");

-- CreateIndex
CREATE INDEX "Invoice_status_idx" ON "public"."Invoice"("status");

-- CreateIndex
CREATE INDEX "Invoice_createdAt_idx" ON "public"."Invoice"("createdAt");

-- CreateIndex
CREATE INDEX "Invoice_updatedAt_idx" ON "public"."Invoice"("updatedAt");

-- CreateIndex
CREATE INDEX "Invoice_deletedAt_idx" ON "public"."Invoice"("deletedAt");

-- CreateIndex
CREATE INDEX "Invoice_issuedAt_idx" ON "public"."Invoice"("issuedAt");

-- CreateIndex
CREATE INDEX "Invoice_tenantId_status_idx" ON "public"."Invoice"("tenantId", "status");

-- CreateIndex
CREATE INDEX "Invoice_tenantId_createdAt_idx" ON "public"."Invoice"("tenantId", "createdAt");

-- CreateIndex
CREATE INDEX "Invoice_customerId_status_idx" ON "public"."Invoice"("customerId", "status");

-- CreateIndex
CREATE INDEX "Invoice_invoiceNumber_idx" ON "public"."Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "InvoiceItem_invoiceId_idx" ON "public"."InvoiceItem"("invoiceId");

-- CreateIndex
CREATE INDEX "InvoiceItem_serviceId_idx" ON "public"."InvoiceItem"("serviceId");

-- CreateIndex
CREATE INDEX "InvoiceItem_createdAt_idx" ON "public"."InvoiceItem"("createdAt");

-- CreateIndex
CREATE INDEX "ReportTemplate_tenantId_idx" ON "public"."ReportTemplate"("tenantId");

-- CreateIndex
CREATE INDEX "ReportTemplate_serviceId_idx" ON "public"."ReportTemplate"("serviceId");

-- CreateIndex
CREATE INDEX "ReportTemplate_name_idx" ON "public"."ReportTemplate"("name");

-- CreateIndex
CREATE INDEX "ReportTemplate_deletedAt_idx" ON "public"."ReportTemplate"("deletedAt");

-- CreateIndex
CREATE INDEX "ReportTemplate_isActive_idx" ON "public"."ReportTemplate"("isActive");

-- CreateIndex
CREATE INDEX "ReportParameter_templateId_idx" ON "public"."ReportParameter"("templateId");

-- CreateIndex
CREATE INDEX "ReportParameter_name_idx" ON "public"."ReportParameter"("name");

-- CreateIndex
CREATE INDEX "ReportParameter_isCritical_idx" ON "public"."ReportParameter"("isCritical");

-- CreateIndex
CREATE INDEX "ReportParameter_deletedAt_idx" ON "public"."ReportParameter"("deletedAt");

-- CreateIndex
CREATE INDEX "ReportParameter_gender_idx" ON "public"."ReportParameter"("gender");

-- CreateIndex
CREATE INDEX "ReportParameter_ageMin_idx" ON "public"."ReportParameter"("ageMin");

-- CreateIndex
CREATE INDEX "ReportParameter_ageMax_idx" ON "public"."ReportParameter"("ageMax");

-- CreateIndex
CREATE INDEX "ReportParameter_referenceMin_idx" ON "public"."ReportParameter"("referenceMin");

-- CreateIndex
CREATE INDEX "ReportParameter_referenceMax_idx" ON "public"."ReportParameter"("referenceMax");

-- CreateIndex
CREATE INDEX "ReportParameter_genderSpecific_idx" ON "public"."ReportParameter"("genderSpecific");

-- CreateIndex
CREATE INDEX "ReportParameter_ageSpecific_idx" ON "public"."ReportParameter"("ageSpecific");

-- CreateIndex
CREATE INDEX "ReportParameter_method_idx" ON "public"."ReportParameter"("method");

-- CreateIndex
CREATE INDEX "ReportParameter_turnaroundTime_idx" ON "public"."ReportParameter"("turnaroundTime");

-- CreateIndex
CREATE INDEX "ReportParameter_unit_idx" ON "public"."ReportParameter"("unit");

-- CreateIndex
CREATE INDEX "ReportParameter_notes_idx" ON "public"."ReportParameter"("notes");

-- CreateIndex
CREATE UNIQUE INDEX "Report_reportCode_key" ON "public"."Report"("reportCode");

-- CreateIndex
CREATE INDEX "Report_tenantId_status_idx" ON "public"."Report"("tenantId", "status");

-- CreateIndex
CREATE INDEX "Report_customerId_idx" ON "public"."Report"("customerId");

-- CreateIndex
CREATE INDEX "Report_createdAt_idx" ON "public"."Report"("createdAt");

-- CreateIndex
CREATE INDEX "Report_reportCode_idx" ON "public"."Report"("reportCode");

-- CreateIndex
CREATE INDEX "Report_invoiceId_idx" ON "public"."Report"("invoiceId");

-- CreateIndex
CREATE INDEX "Report_deletedAt_idx" ON "public"."Report"("deletedAt");

-- CreateIndex
CREATE INDEX "Report_updatedAt_idx" ON "public"."Report"("updatedAt");

-- CreateIndex
CREATE INDEX "Report_createdBy_idx" ON "public"."Report"("createdBy");

-- CreateIndex
CREATE INDEX "Report_collectedBy_idx" ON "public"."Report"("collectedBy");

-- CreateIndex
CREATE INDEX "Report_customerAddressId_idx" ON "public"."Report"("customerAddressId");

-- CreateIndex
CREATE INDEX "Report_labAddressId_idx" ON "public"."Report"("labAddressId");

-- CreateIndex
CREATE INDEX "ReportChangeLog_reportId_editVersion_idx" ON "public"."ReportChangeLog"("reportId", "editVersion");

-- CreateIndex
CREATE INDEX "ReportChangeLog_timestamp_idx" ON "public"."ReportChangeLog"("timestamp");

-- CreateIndex
CREATE INDEX "ReportChangeLog_changedById_idx" ON "public"."ReportChangeLog"("changedById");

-- CreateIndex
CREATE INDEX "ReportChangeLog_reportId_idx" ON "public"."ReportChangeLog"("reportId");

-- CreateIndex
CREATE INDEX "ReportDetail_reportId_idx" ON "public"."ReportDetail"("reportId");

-- CreateIndex
CREATE INDEX "ReportDetail_lastEditedAt_idx" ON "public"."ReportDetail"("lastEditedAt");

-- CreateIndex
CREATE INDEX "ReportDetail_parameterId_idx" ON "public"."ReportDetail"("parameterId");

-- CreateIndex
CREATE INDEX "ReportDetail_resultValue_idx" ON "public"."ReportDetail"("resultValue");

-- CreateIndex
CREATE INDEX "ReportDetail_deletedAt_idx" ON "public"."ReportDetail"("deletedAt");

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "public"."Account"("userId");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "public"."Session"("userId");

-- CreateIndex
CREATE INDEX "Session_expires_idx" ON "public"."Session"("expires");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_status_idx" ON "public"."User"("status");

-- CreateIndex
CREATE INDEX "User_createdAt_idx" ON "public"."User"("createdAt");

-- CreateIndex
CREATE INDEX "User_deletedAt_idx" ON "public"."User"("deletedAt");

-- CreateIndex
CREATE INDEX "VerificationToken_expires_idx" ON "public"."VerificationToken"("expires");

-- AddForeignKey
ALTER TABLE "public"."SystemPermission" ADD CONSTRAINT "SystemPermission_roleTemplateId_fkey" FOREIGN KEY ("roleTemplateId") REFERENCES "public"."SystemRoleTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantAddress" ADD CONSTRAINT "TenantAddress_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantAddress" ADD CONSTRAINT "TenantAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserAddress" ADD CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserAddress" ADD CONSTRAINT "UserAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantRole" ADD CONSTRAINT "TenantRole_systemRoleTemplateId_fkey" FOREIGN KEY ("systemRoleTemplateId") REFERENCES "public"."SystemRoleTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantRole" ADD CONSTRAINT "TenantRole_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantPermission" ADD CONSTRAINT "TenantPermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."TenantRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantUserRole" ADD CONSTRAINT "TenantUserRole_tenantUserId_fkey" FOREIGN KEY ("tenantUserId") REFERENCES "public"."TenantUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantUserRole" ADD CONSTRAINT "TenantUserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."TenantRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantUser" ADD CONSTRAINT "TenantUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TenantUser" ADD CONSTRAINT "TenantUser_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AuditLog" ADD CONSTRAINT "AuditLog_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SyncLog" ADD CONSTRAINT "SyncLog_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServiceCategory" ADD CONSTRAINT "ServiceCategory_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Service" ADD CONSTRAINT "Service_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."ServiceCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Customer" ADD CONSTRAINT "Customer_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CustomerAddress" ADD CONSTRAINT "CustomerAddress_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CustomerAddress" ADD CONSTRAINT "CustomerAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Doctor" ADD CONSTRAINT "Doctor_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorAddress" ADD CONSTRAINT "DoctorAddress_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorAddress" ADD CONSTRAINT "DoctorAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorCommission" ADD CONSTRAINT "DoctorCommission_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorCommissionLog" ADD CONSTRAINT "DoctorCommissionLog_commissionId_fkey" FOREIGN KEY ("commissionId") REFERENCES "public"."DoctorCommission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorCommissionLog" ADD CONSTRAINT "DoctorCommissionLog_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorCommissionLog" ADD CONSTRAINT "DoctorCommissionLog_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DoctorCommissionPayment" ADD CONSTRAINT "DoctorCommissionPayment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InvoiceItem" ADD CONSTRAINT "InvoiceItem_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportTemplate" ADD CONSTRAINT "ReportTemplate_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportTemplate" ADD CONSTRAINT "ReportTemplate_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportParameter" ADD CONSTRAINT "ReportParameter_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "public"."ReportTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "public"."TenantUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_collectedBy_fkey" FOREIGN KEY ("collectedBy") REFERENCES "public"."TenantUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_customerAddressId_fkey" FOREIGN KEY ("customerAddressId") REFERENCES "public"."CustomerAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Report" ADD CONSTRAINT "Report_labAddressId_fkey" FOREIGN KEY ("labAddressId") REFERENCES "public"."TenantAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportChangeLog" ADD CONSTRAINT "ReportChangeLog_changedById_fkey" FOREIGN KEY ("changedById") REFERENCES "public"."TenantUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportChangeLog" ADD CONSTRAINT "ReportChangeLog_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "public"."Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportDetail" ADD CONSTRAINT "ReportDetail_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "public"."Report"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportDetail" ADD CONSTRAINT "ReportDetail_parameterId_fkey" FOREIGN KEY ("parameterId") REFERENCES "public"."ReportParameter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ReportDetail" ADD CONSTRAINT "ReportDetail_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "public"."Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
