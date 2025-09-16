import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  users: z.boolean().optional(),
  subscriptions: z.boolean().optional(),
  auditLogs: z.boolean().optional(),
  ServiceCategory: z.boolean().optional(),
  Service: z.boolean().optional(),
  Customer: z.boolean().optional(),
  Doctor: z.boolean().optional(),
  ReportInvoice: z.boolean().optional(),
  Report: z.boolean().optional(),
  ReportTemplate: z.boolean().optional(),
  tenantAddresses: z.boolean().optional(),
  SyncLog: z.boolean().optional(),
  Roles: z.boolean().optional(),
  ReportInvoicePayment: z.boolean().optional(),
  Notification: z.boolean().optional()
}).strict();
export const TenantCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TenantCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantCountOutputTypeSelect>;
export const TenantCountOutputTypeSelectObjectZodSchema = makeSchema();
