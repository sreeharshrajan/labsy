import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ServiceCategoryArgsObjectSchema } from './ServiceCategoryArgs.schema';
import { ReportInvoiceItemFindManySchema } from '../findManyReportInvoiceItem.schema';
import { ReportDetailFindManySchema } from '../findManyReportDetail.schema';
import { ReportTemplateFindManySchema } from '../findManyReportTemplate.schema';
import { ReportInvoiceFindManySchema } from '../findManyReportInvoice.schema';
import { ServiceCountOutputTypeArgsObjectSchema } from './ServiceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  Tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  Category: z.union([z.boolean(), z.lazy(() => ServiceCategoryArgsObjectSchema)]).optional(),
  ReportInvoiceItem: z.union([z.boolean(), z.lazy(() => ReportInvoiceItemFindManySchema)]).optional(),
  ReportDetail: z.union([z.boolean(), z.lazy(() => ReportDetailFindManySchema)]).optional(),
  ReportTemplate: z.union([z.boolean(), z.lazy(() => ReportTemplateFindManySchema)]).optional(),
  ReportInvoice: z.union([z.boolean(), z.lazy(() => ReportInvoiceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ServiceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ServiceSelectObjectSchema: z.ZodType<Prisma.ServiceSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServiceSelect>;
export const ServiceSelectObjectZodSchema = makeSchema();
