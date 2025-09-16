import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserFindManySchema } from '../findManyTenantUser.schema';
import { SubscriptionFindManySchema } from '../findManySubscription.schema';
import { AuditLogFindManySchema } from '../findManyAuditLog.schema';
import { ServiceCategoryFindManySchema } from '../findManyServiceCategory.schema';
import { ServiceFindManySchema } from '../findManyService.schema';
import { CustomerFindManySchema } from '../findManyCustomer.schema';
import { DoctorFindManySchema } from '../findManyDoctor.schema';
import { ReportInvoiceFindManySchema } from '../findManyReportInvoice.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { ReportTemplateFindManySchema } from '../findManyReportTemplate.schema';
import { TenantAddressFindManySchema } from '../findManyTenantAddress.schema';
import { SyncLogFindManySchema } from '../findManySyncLog.schema';
import { TenantRoleFindManySchema } from '../findManyTenantRole.schema';
import { ReportInvoicePaymentFindManySchema } from '../findManyReportInvoicePayment.schema';
import { NotificationFindManySchema } from '../findManyNotification.schema';
import { TenantCountOutputTypeArgsObjectSchema } from './TenantCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => TenantUserFindManySchema)]).optional(),
  subscriptions: z.union([z.boolean(), z.lazy(() => SubscriptionFindManySchema)]).optional(),
  auditLogs: z.union([z.boolean(), z.lazy(() => AuditLogFindManySchema)]).optional(),
  ServiceCategory: z.union([z.boolean(), z.lazy(() => ServiceCategoryFindManySchema)]).optional(),
  Service: z.union([z.boolean(), z.lazy(() => ServiceFindManySchema)]).optional(),
  Customer: z.union([z.boolean(), z.lazy(() => CustomerFindManySchema)]).optional(),
  Doctor: z.union([z.boolean(), z.lazy(() => DoctorFindManySchema)]).optional(),
  ReportInvoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceFindManySchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  ReportTemplate: z.union([z.boolean(), z.lazy(() => ReportTemplateFindManySchema)]).optional(),
  tenantAddresses: z.union([z.boolean(), z.lazy(() => TenantAddressFindManySchema)]).optional(),
  SyncLog: z.union([z.boolean(), z.lazy(() => SyncLogFindManySchema)]).optional(),
  Roles: z.union([z.boolean(), z.lazy(() => TenantRoleFindManySchema)]).optional(),
  ReportInvoicePayment: z.union([z.boolean(), z.lazy(() => ReportInvoicePaymentFindManySchema)]).optional(),
  Notification: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantIncludeObjectSchema: z.ZodType<Prisma.TenantInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantInclude>;
export const TenantIncludeObjectZodSchema = makeSchema();
