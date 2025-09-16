import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  metaData: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const PageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageCountOrderByAggregateInput>;
export const PageCountOrderByAggregateInputObjectZodSchema = makeSchema();
