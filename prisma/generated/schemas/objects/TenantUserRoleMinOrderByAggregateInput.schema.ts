import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  tenantUserId: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional()
}).strict();
export const TenantUserRoleMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserRoleMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleMinOrderByAggregateInput>;
export const TenantUserRoleMinOrderByAggregateInputObjectZodSchema = makeSchema();
