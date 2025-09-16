import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional()
}).strict();
export const TenantUserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCountOrderByAggregateInput>;
export const TenantUserCountOrderByAggregateInputObjectZodSchema = makeSchema();
