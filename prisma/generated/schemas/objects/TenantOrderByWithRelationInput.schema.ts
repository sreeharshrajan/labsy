import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantUserOrderByRelationAggregateInputObjectSchema } from './TenantUserOrderByRelationAggregateInput.schema';
import { SubscriptionOrderByRelationAggregateInputObjectSchema } from './SubscriptionOrderByRelationAggregateInput.schema';
import { AuditLogOrderByRelationAggregateInputObjectSchema } from './AuditLogOrderByRelationAggregateInput.schema';
import { ServiceCategoryOrderByRelationAggregateInputObjectSchema } from './ServiceCategoryOrderByRelationAggregateInput.schema';
import { ServiceOrderByRelationAggregateInputObjectSchema } from './ServiceOrderByRelationAggregateInput.schema';
import { CustomerOrderByRelationAggregateInputObjectSchema } from './CustomerOrderByRelationAggregateInput.schema';
import { DoctorOrderByRelationAggregateInputObjectSchema } from './DoctorOrderByRelationAggregateInput.schema';
import { ReportInvoiceOrderByRelationAggregateInputObjectSchema } from './ReportInvoiceOrderByRelationAggregateInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { ReportTemplateOrderByRelationAggregateInputObjectSchema } from './ReportTemplateOrderByRelationAggregateInput.schema';
import { TenantAddressOrderByRelationAggregateInputObjectSchema } from './TenantAddressOrderByRelationAggregateInput.schema';
import { SyncLogOrderByRelationAggregateInputObjectSchema } from './SyncLogOrderByRelationAggregateInput.schema';
import { TenantRoleOrderByRelationAggregateInputObjectSchema } from './TenantRoleOrderByRelationAggregateInput.schema';
import { ReportInvoicePaymentOrderByRelationAggregateInputObjectSchema } from './ReportInvoicePaymentOrderByRelationAggregateInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  labLicenseNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  contactEmail: SortOrderSchema.optional(),
  contactPhone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gstin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  canManageRoles: SortOrderSchema.optional(),
  maxCustomRoles: SortOrderSchema.optional(),
  maxUsers: SortOrderSchema.optional(),
  users: z.lazy(() => TenantUserOrderByRelationAggregateInputObjectSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionOrderByRelationAggregateInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogOrderByRelationAggregateInputObjectSchema).optional(),
  ServiceCategory: z.lazy(() => ServiceCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceOrderByRelationAggregateInputObjectSchema).optional(),
  Customer: z.lazy(() => CustomerOrderByRelationAggregateInputObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorOrderByRelationAggregateInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceOrderByRelationAggregateInputObjectSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateOrderByRelationAggregateInputObjectSchema).optional(),
  tenantAddresses: z.lazy(() => TenantAddressOrderByRelationAggregateInputObjectSchema).optional(),
  SyncLog: z.lazy(() => SyncLogOrderByRelationAggregateInputObjectSchema).optional(),
  Roles: z.lazy(() => TenantRoleOrderByRelationAggregateInputObjectSchema).optional(),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentOrderByRelationAggregateInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TenantOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantOrderByWithRelationInput>;
export const TenantOrderByWithRelationInputObjectZodSchema = makeSchema();
