import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TenantUserRoleOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserRoleOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleOrderByRelationAggregateInput>;
export const TenantUserRoleOrderByRelationAggregateInputObjectZodSchema = makeSchema();
