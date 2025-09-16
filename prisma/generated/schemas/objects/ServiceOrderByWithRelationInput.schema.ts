import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { ServiceCategoryOrderByWithRelationInputObjectSchema } from './ServiceCategoryOrderByWithRelationInput.schema';
import { ReportInvoiceItemOrderByRelationAggregateInputObjectSchema } from './ReportInvoiceItemOrderByRelationAggregateInput.schema';
import { ReportDetailOrderByRelationAggregateInputObjectSchema } from './ReportDetailOrderByRelationAggregateInput.schema';
import { ReportTemplateOrderByRelationAggregateInputObjectSchema } from './ReportTemplateOrderByRelationAggregateInput.schema';
import { ReportInvoiceOrderByRelationAggregateInputObjectSchema } from './ReportInvoiceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  price: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  categoryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  Category: z.lazy(() => ServiceCategoryOrderByWithRelationInputObjectSchema).optional(),
  ReportInvoiceItem: z.lazy(() => ReportInvoiceItemOrderByRelationAggregateInputObjectSchema).optional(),
  ReportDetail: z.lazy(() => ReportDetailOrderByRelationAggregateInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateOrderByRelationAggregateInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ServiceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServiceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceOrderByWithRelationInput>;
export const ServiceOrderByWithRelationInputObjectZodSchema = makeSchema();
