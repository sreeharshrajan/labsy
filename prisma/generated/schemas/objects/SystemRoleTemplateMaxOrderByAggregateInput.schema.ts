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
export const SystemRoleTemplateMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateMaxOrderByAggregateInput>;
export const SystemRoleTemplateMaxOrderByAggregateInputObjectZodSchema = makeSchema();
