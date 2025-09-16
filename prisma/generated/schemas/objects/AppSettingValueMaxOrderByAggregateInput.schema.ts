import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  settingId: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const AppSettingValueMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppSettingValueMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueMaxOrderByAggregateInput>;
export const AppSettingValueMaxOrderByAggregateInputObjectZodSchema = makeSchema();
