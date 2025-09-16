import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const PostMaxAggregateInputObjectSchema: z.ZodType<Prisma.PostMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostMaxAggregateInputType>;
export const PostMaxAggregateInputObjectZodSchema = makeSchema();
