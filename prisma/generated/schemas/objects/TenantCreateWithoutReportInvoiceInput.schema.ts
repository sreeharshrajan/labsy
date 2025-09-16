import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateNestedManyWithoutTenantInputObjectSchema } from './TenantUserCreateNestedManyWithoutTenantInput.schema';
import { SubscriptionCreateNestedManyWithoutTenantInputObjectSchema } from './SubscriptionCreateNestedManyWithoutTenantInput.schema';
import { AuditLogCreateNestedManyWithoutTenantInputObjectSchema } from './AuditLogCreateNestedManyWithoutTenantInput.schema';
import { ServiceCategoryCreateNestedManyWithoutTenantInputObjectSchema } from './ServiceCategoryCreateNestedManyWithoutTenantInput.schema';
import { ServiceCreateNestedManyWithoutTenantInputObjectSchema } from './ServiceCreateNestedManyWithoutTenantInput.schema';
import { CustomerCreateNestedManyWithoutTenantInputObjectSchema } from './CustomerCreateNestedManyWithoutTenantInput.schema';
import { DoctorCreateNestedManyWithoutTenantInputObjectSchema } from './DoctorCreateNestedManyWithoutTenantInput.schema';
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
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  canManageRoles: z.boolean().optional(),
  maxCustomRoles: z.number().int().optional(),
  maxUsers: z.number().int().optional(),
  users: z.lazy(() => TenantUserCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  ServiceCategory: z.lazy(() => ServiceCategoryCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Customer: z.lazy(() => CustomerCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Report: z.lazy(() => ReportCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  tenantAddresses: z.lazy(() => TenantAddressCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  SyncLog: z.lazy(() => SyncLogCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Roles: z.lazy(() => TenantRoleCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantCreateWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.TenantCreateWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateWithoutReportInvoiceInput>;
export const TenantCreateWithoutReportInvoiceInputObjectZodSchema = makeSchema();
