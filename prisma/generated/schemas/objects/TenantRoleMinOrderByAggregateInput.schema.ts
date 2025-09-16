import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  isSystem: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  systemRoleTemplateId: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional()
}).strict();
export const TenantRoleMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantRoleMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleMinOrderByAggregateInput>;
export const TenantRoleMinOrderByAggregateInputObjectZodSchema = makeSchema();
