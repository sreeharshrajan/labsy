import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateNestedManyWithoutTenantInputObjectSchema } from './TenantUserCreateNestedManyWithoutTenantInput.schema';
import { SubscriptionCreateNestedManyWithoutTenantInputObjectSchema } from './SubscriptionCreateNestedManyWithoutTenantInput.schema';
import { AuditLogCreateNestedManyWithoutTenantInputObjectSchema } from './AuditLogCreateNestedManyWithoutTenantInput.schema';
import { ServiceCategoryCreateNestedManyWithoutTenantInputObjectSchema } from './ServiceCategoryCreateNestedManyWithoutTenantInput.schema';
import { ServiceCreateNestedManyWithoutTenantInputObjectSchema } from './ServiceCreateNestedManyWithoutTenantInput.schema';
import { CustomerCreateNestedManyWithoutTenantInputObjectSchema } from './CustomerCreateNestedManyWithoutTenantInput.schema';
import { DoctorCreateNestedManyWithoutTenantInputObjectSchema } from './DoctorCreateNestedManyWithoutTenantInput.schema';
import { ReportInvoiceCreateNestedManyWithoutTenantInputObjectSchema } from './ReportInvoiceCreateNestedManyWithoutTenantInput.schema';
import { ReportCreateNestedManyWithoutTenantInputObjectSchema } from './ReportCreateNestedManyWithoutTenantInput.schema';
import { ReportTemplateCreateNestedManyWithoutTenantInputObjectSchema } from './ReportTemplateCreateNestedManyWithoutTenantInput.schema';
import { TenantAddressCreateNestedManyWithoutTenantInputObjectSchema } from './TenantAddressCreateNestedManyWithoutTenantInput.schema';
import { SyncLogCreateNestedManyWithoutTenantInputObjectSchema } from './SyncLogCreateNestedManyWithoutTenantInput.schema';
import { TenantRoleCreateNestedManyWithoutTenantInputObjectSchema } from './TenantRoleCreateNestedManyWithoutTenantInput.schema';
import { ReportInvoicePaymentCreateNestedManyWithoutTenantInputObjectSchema } from './ReportInvoicePaymentCreateNestedManyWithoutTenantInput.schema';
import { NotificationCreateNestedManyWithoutTenantInputObjectSchema } from './NotificationCreateNestedManyWithoutTenantInput.schema'

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
  users: z.lazy(() => TenantUserCreateNestedManyWithoutTenantInputObjectSchema),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutTenantInputObjectSchema),
  auditLogs: z.lazy(() => AuditLogCreateNestedManyWithoutTenantInputObjectSchema),
  ServiceCategory: z.lazy(() => ServiceCategoryCreateNestedManyWithoutTenantInputObjectSchema),
  Service: z.lazy(() => ServiceCreateNestedManyWithoutTenantInputObjectSchema),
  Customer: z.lazy(() => CustomerCreateNestedManyWithoutTenantInputObjectSchema),
  Doctor: z.lazy(() => DoctorCreateNestedManyWithoutTenantInputObjectSchema),
  ReportInvoice: z.lazy(() => ReportInvoiceCreateNestedManyWithoutTenantInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutTenantInputObjectSchema),
  ReportTemplate: z.lazy(() => ReportTemplateCreateNestedManyWithoutTenantInputObjectSchema),
  tenantAddresses: z.lazy(() => TenantAddressCreateNestedManyWithoutTenantInputObjectSchema),
  SyncLog: z.lazy(() => SyncLogCreateNestedManyWithoutTenantInputObjectSchema),
  Roles: z.lazy(() => TenantRoleCreateNestedManyWithoutTenantInputObjectSchema),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentCreateNestedManyWithoutTenantInputObjectSchema),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutTenantInputObjectSchema)
}).strict();
export const TenantCreateInputObjectSchema: z.ZodType<Prisma.TenantCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateInput>;
export const TenantCreateInputObjectZodSchema = makeSchema();
