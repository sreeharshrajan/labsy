import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  maxCustomRoles: z.literal(true).optional(),
  maxUsers: z.literal(true).optional()
}).strict();
export const TenantSumAggregateInputObjectSchema: z.ZodType<Prisma.TenantSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantSumAggregateInputType>;
export const TenantSumAggregateInputObjectZodSchema = makeSchema();
