import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PageContentOrderByRelationAggregateInputObjectSchema } from './PageContentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  metaData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pageContents: z.lazy(() => PageContentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PageOrderByWithRelationInput>;
export const PageOrderByWithRelationInputObjectZodSchema = makeSchema();
