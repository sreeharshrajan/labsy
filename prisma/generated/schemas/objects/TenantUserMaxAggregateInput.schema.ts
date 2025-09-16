import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  tenantId: z.literal(true).optional()
}).strict();
export const TenantUserMaxAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserMaxAggregateInputType>;
export const TenantUserMaxAggregateInputObjectZodSchema = makeSchema();
