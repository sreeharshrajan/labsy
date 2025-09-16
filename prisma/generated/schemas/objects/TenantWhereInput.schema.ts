import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { TenantUserListRelationFilterObjectSchema } from './TenantUserListRelationFilter.schema';
import { SubscriptionListRelationFilterObjectSchema } from './SubscriptionListRelationFilter.schema';
import { AuditLogListRelationFilterObjectSchema } from './AuditLogListRelationFilter.schema';
import { ServiceCategoryListRelationFilterObjectSchema } from './ServiceCategoryListRelationFilter.schema';
import { ServiceListRelationFilterObjectSchema } from './ServiceListRelationFilter.schema';
import { CustomerListRelationFilterObjectSchema } from './CustomerListRelationFilter.schema';
import { DoctorListRelationFilterObjectSchema } from './DoctorListRelationFilter.schema';
import { ReportInvoiceListRelationFilterObjectSchema } from './ReportInvoiceListRelationFilter.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { ReportTemplateListRelationFilterObjectSchema } from './ReportTemplateListRelationFilter.schema';
import { TenantAddressListRelationFilterObjectSchema } from './TenantAddressListRelationFilter.schema';
import { SyncLogListRelationFilterObjectSchema } from './SyncLogListRelationFilter.schema';
import { TenantRoleListRelationFilterObjectSchema } from './TenantRoleListRelationFilter.schema';
import { ReportInvoicePaymentListRelationFilterObjectSchema } from './ReportInvoicePaymentListRelationFilter.schema';
import { NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema'

const tenantwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  labLicenseNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  contactEmail: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  contactPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  gstin: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  canManageRoles: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  maxCustomRoles: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxUsers: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  users: z.lazy(() => TenantUserListRelationFilterObjectSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionListRelationFilterObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogListRelationFilterObjectSchema).optional(),
  ServiceCategory: z.lazy(() => ServiceCategoryListRelationFilterObjectSchema).optional(),
  Service: z.lazy(() => ServiceListRelationFilterObjectSchema).optional(),
  Customer: z.lazy(() => CustomerListRelationFilterObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorListRelationFilterObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceListRelationFilterObjectSchema).optional(),
  Report: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateListRelationFilterObjectSchema).optional(),
  tenantAddresses: z.lazy(() => TenantAddressListRelationFilterObjectSchema).optional(),
  SyncLog: z.lazy(() => SyncLogListRelationFilterObjectSchema).optional(),
  Roles: z.lazy(() => TenantRoleListRelationFilterObjectSchema).optional(),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentListRelationFilterObjectSchema).optional(),
  Notification: z.lazy(() => NotificationListRelationFilterObjectSchema).optional()
}).strict();
export const TenantWhereInputObjectSchema: z.ZodType<Prisma.TenantWhereInput> = tenantwhereinputSchema as unknown as z.ZodType<Prisma.TenantWhereInput>;
export const TenantWhereInputObjectZodSchema = tenantwhereinputSchema;
