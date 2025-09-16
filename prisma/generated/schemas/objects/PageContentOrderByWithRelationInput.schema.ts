import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PageOrderByWithRelationInputObjectSchema } from './PageOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  section: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Page: z.lazy(() => PageOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PageContentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PageContentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PageContentOrderByWithRelationInput>;
export const PageContentOrderByWithRelationInputObjectZodSchema = makeSchema();
