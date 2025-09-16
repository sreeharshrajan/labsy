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
export const PageContentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PageContentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentMaxOrderByAggregateInput>;
export const PageContentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
