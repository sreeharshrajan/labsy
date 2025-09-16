import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppSettingCountOrderByAggregateInputObjectSchema } from './AppSettingCountOrderByAggregateInput.schema';
import { AppSettingMaxOrderByAggregateInputObjectSchema } from './AppSettingMaxOrderByAggregateInput.schema';
import { AppSettingMinOrderByAggregateInputObjectSchema } from './AppSettingMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AppSettingCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AppSettingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AppSettingMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AppSettingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AppSettingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingOrderByWithAggregationInput>;
export const AppSettingOrderByWithAggregationInputObjectZodSchema = makeSchema();
