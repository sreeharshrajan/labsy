import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const PageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageMinOrderByAggregateInput>;
export const PageMinOrderByAggregateInputObjectZodSchema = makeSchema();
