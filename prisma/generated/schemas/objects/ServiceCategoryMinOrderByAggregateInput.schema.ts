import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional()
}).strict();
export const ServiceCategoryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryMinOrderByAggregateInput>;
export const ServiceCategoryMinOrderByAggregateInputObjectZodSchema = makeSchema();
