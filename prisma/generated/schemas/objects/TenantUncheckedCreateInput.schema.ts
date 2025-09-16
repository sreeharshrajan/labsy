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
import { ReportTemplateUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedCreateNestedManyWithoutTenantInput.schema';
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
  deletedAt: z.coerce.date().optional().nullable(),
  canManageRoles: z.boolean().optional(),
  maxCustomRoles: z.number().int().optional(),
  maxUsers: z.number().int().optional(),
  users: z.lazy(() => TenantUserUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  auditLogs: z.lazy(() => AuditLogUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  ServiceCategory: z.lazy(() => ServiceCategoryUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  Service: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  Customer: z.lazy(() => CustomerUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  Doctor: z.lazy(() => DoctorUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  ReportTemplate: z.lazy(() => ReportTemplateUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  tenantAddresses: z.lazy(() => TenantAddressUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  SyncLog: z.lazy(() => SyncLogUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  Roles: z.lazy(() => TenantRoleUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutTenantInputObjectSchema)
}).strict();
export const TenantUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateInput>;
export const TenantUncheckedCreateInputObjectZodSchema = makeSchema();
