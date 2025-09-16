import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TenantUserUncheckedCreateNestedManyWithoutTenantInput.schema';
import { SubscriptionUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './SubscriptionUncheckedCreateNestedManyWithoutTenantInput.schema';
import { AuditLogUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './AuditLogUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ServiceCategoryUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ServiceCategoryUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ServiceUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ServiceUncheckedCreateNestedManyWithoutTenantInput.schema';
import { CustomerUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './CustomerUncheckedCreateNestedManyWithoutTenantInput.schema';
import { DoctorUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './DoctorUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ReportInvoiceUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ReportUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutTenantInput.schema';
import { TenantAddressUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TenantAddressUncheckedCreateNestedManyWithoutTenantInput.schema';
import { SyncLogUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './SyncLogUncheckedCreateNestedManyWithoutTenantInput.schema';
import { TenantRoleUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TenantRoleUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ReportInvoicePaymentUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateNestedManyWithoutTenantInput.schema';
import { NotificationUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './NotificationUncheckedCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  labLicenseNumber: z.string().optional().nullable(),
  contactEmail: z.string(),
  contactPhone: z.string().optional().nullable(),
  gstin: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  canManageRoles: z.boolean().optional(),
  maxCustomRoles: z.number().int().optional(),
  maxUsers: z.number().int().optional(),
  users: z.lazy(() => TenantUserUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  ServiceCategory: z.lazy(() => ServiceCategoryUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Customer: z.lazy(() => CustomerUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  tenantAddresses: z.lazy(() => TenantAddressUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  SyncLog: z.lazy(() => SyncLogUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Roles: z.lazy(() => TenantRoleUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantUncheckedCreateWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateWithoutReportTemplateInput>;
export const TenantUncheckedCreateWithoutReportTemplateInputObjectZodSchema = makeSchema();
