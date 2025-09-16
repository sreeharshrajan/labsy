import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TenantUserCountAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCountAggregateInputType>;
export const TenantUserCountAggregateInputObjectZodSchema = makeSchema();
