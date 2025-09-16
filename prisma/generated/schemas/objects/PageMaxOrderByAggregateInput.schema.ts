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
export const PageMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageMaxOrderByAggregateInput>;
export const PageMaxOrderByAggregateInputObjectZodSchema = makeSchema();
