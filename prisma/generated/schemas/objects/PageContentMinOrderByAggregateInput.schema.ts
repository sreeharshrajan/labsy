import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  section: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  pageId: SortOrderSchema.optional()
}).strict();
export const PageContentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageContentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentMinOrderByAggregateInput>;
export const PageContentMinOrderByAggregateInputObjectZodSchema = makeSchema();
