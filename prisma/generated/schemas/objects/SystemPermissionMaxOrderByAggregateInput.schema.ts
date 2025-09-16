import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  roleTemplateId: SortOrderSchema.optional()
}).strict();
export const SystemPermissionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SystemPermissionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionMaxOrderByAggregateInput>;
export const SystemPermissionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
