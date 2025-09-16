import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TenantRoleOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TenantRoleOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleOrderByRelationAggregateInput>;
export const TenantRoleOrderByRelationAggregateInputObjectZodSchema = makeSchema();
