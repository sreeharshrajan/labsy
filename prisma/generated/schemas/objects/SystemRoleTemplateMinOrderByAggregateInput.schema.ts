import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional()
}).strict();
export const SystemRoleTemplateMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateMinOrderByAggregateInput>;
export const SystemRoleTemplateMinOrderByAggregateInputObjectZodSchema = makeSchema();
