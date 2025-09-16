import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const AppSettingCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppSettingCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingCountOrderByAggregateInput>;
export const AppSettingCountOrderByAggregateInputObjectZodSchema = makeSchema();
