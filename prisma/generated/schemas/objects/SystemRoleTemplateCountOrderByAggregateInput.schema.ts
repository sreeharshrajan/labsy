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
export const SystemRoleTemplateCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateCountOrderByAggregateInput>;
export const SystemRoleTemplateCountOrderByAggregateInputObjectZodSchema = makeSchema();
