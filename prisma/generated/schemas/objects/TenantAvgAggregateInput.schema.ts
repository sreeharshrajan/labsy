import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  maxCustomRoles: z.literal(true).optional(),
  maxUsers: z.literal(true).optional()
}).strict();
export const TenantAvgAggregateInputObjectSchema: z.ZodType<Prisma.TenantAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantAvgAggregateInputType>;
export const TenantAvgAggregateInputObjectZodSchema = makeSchema();
