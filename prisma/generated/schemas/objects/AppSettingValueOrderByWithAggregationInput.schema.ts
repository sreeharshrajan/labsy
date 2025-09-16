import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppSettingValueCountOrderByAggregateInputObjectSchema } from './AppSettingValueCountOrderByAggregateInput.schema';
import { AppSettingValueMaxOrderByAggregateInputObjectSchema } from './AppSettingValueMaxOrderByAggregateInput.schema';
import { AppSettingValueMinOrderByAggregateInputObjectSchema } from './AppSettingValueMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  settingId: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AppSettingValueCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AppSettingValueMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AppSettingValueMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AppSettingValueOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AppSettingValueOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueOrderByWithAggregationInput>;
export const AppSettingValueOrderByWithAggregationInputObjectZodSchema = makeSchema();
