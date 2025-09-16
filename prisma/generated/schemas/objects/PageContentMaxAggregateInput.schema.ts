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
export const PageContentMaxAggregateInputObjectSchema: z.ZodType<Prisma.PageContentMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PageContentMaxAggregateInputType>;
export const PageContentMaxAggregateInputObjectZodSchema = makeSchema();
