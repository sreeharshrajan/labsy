import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  maxCustomRoles: SortOrderSchema.optional(),
  maxUsers: SortOrderSchema.optional()
}).strict();
export const TenantSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantSumOrderByAggregateInput>;
export const TenantSumOrderByAggregateInputObjectZodSchema = makeSchema();
