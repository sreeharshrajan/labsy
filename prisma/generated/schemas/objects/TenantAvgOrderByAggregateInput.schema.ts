import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  maxCustomRoles: SortOrderSchema.optional(),
  maxUsers: SortOrderSchema.optional()
}).strict();
export const TenantAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAvgOrderByAggregateInput>;
export const TenantAvgOrderByAggregateInputObjectZodSchema = makeSchema();
