import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  code: z.literal(true).optional(),
  description: z.literal(true).optional(),
  price: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ServiceCountAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCountAggregateInputType>;
export const ServiceCountAggregateInputObjectZodSchema = makeSchema();
