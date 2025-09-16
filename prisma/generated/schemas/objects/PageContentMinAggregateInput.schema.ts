import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  section: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  pageId: z.literal(true).optional()
}).strict();
export const PageContentMinAggregateInputObjectSchema: z.ZodType<Prisma.PageContentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PageContentMinAggregateInputType>;
export const PageContentMinAggregateInputObjectZodSchema = makeSchema();
