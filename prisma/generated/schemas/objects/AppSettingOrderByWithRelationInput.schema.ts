import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppSettingValueOrderByRelationAggregateInputObjectSchema } from './AppSettingValueOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  values: z.lazy(() => AppSettingValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AppSettingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AppSettingOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingOrderByWithRelationInput>;
export const AppSettingOrderByWithRelationInputObjectZodSchema = makeSchema();
