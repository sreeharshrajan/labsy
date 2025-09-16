import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportTemplateCountOrderByAggregateInputObjectSchema } from './ReportTemplateCountOrderByAggregateInput.schema';
import { ReportTemplateMaxOrderByAggregateInputObjectSchema } from './ReportTemplateMaxOrderByAggregateInput.schema';
import { ReportTemplateMinOrderByAggregateInputObjectSchema } from './ReportTemplateMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  unit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  _count: z.lazy(() => ReportTemplateCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportTemplateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportTemplateMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportTemplateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportTemplateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateOrderByWithAggregationInput>;
export const ReportTemplateOrderByWithAggregationInputObjectZodSchema = makeSchema();
