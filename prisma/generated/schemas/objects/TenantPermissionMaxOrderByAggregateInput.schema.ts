import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional()
}).strict();
export const TenantPermissionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantPermissionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionMaxOrderByAggregateInput>;
export const TenantPermissionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
