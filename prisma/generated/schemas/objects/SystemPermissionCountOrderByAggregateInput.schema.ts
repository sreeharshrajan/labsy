import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  conditions: SortOrderSchema.optional(),
  roleTemplateId: SortOrderSchema.optional()
}).strict();
export const SystemPermissionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SystemPermissionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionCountOrderByAggregateInput>;
export const SystemPermissionCountOrderByAggregateInputObjectZodSchema = makeSchema();
