import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  roleTemplateId: SortOrderSchema.optional()
}).strict();
export const SystemPermissionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SystemPermissionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionMinOrderByAggregateInput>;
export const SystemPermissionMinOrderByAggregateInputObjectZodSchema = makeSchema();
