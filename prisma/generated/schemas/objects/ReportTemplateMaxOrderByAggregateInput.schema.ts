import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional(),
  reference: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional()
}).strict();
export const ReportTemplateMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportTemplateMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateMaxOrderByAggregateInput>;
export const ReportTemplateMaxOrderByAggregateInputObjectZodSchema = makeSchema();
