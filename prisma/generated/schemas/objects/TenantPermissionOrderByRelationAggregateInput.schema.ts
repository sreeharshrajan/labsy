import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TenantPermissionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TenantPermissionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionOrderByRelationAggregateInput>;
export const TenantPermissionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
