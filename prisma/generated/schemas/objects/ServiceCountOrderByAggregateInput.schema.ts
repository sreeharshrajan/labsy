import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional()
}).strict();
export const ServiceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCountOrderByAggregateInput>;
export const ServiceCountOrderByAggregateInputObjectZodSchema = makeSchema();
