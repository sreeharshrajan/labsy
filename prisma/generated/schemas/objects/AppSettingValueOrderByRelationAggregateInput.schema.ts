import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AppSettingValueOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AppSettingValueOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueOrderByRelationAggregateInput>;
export const AppSettingValueOrderByRelationAggregateInputObjectZodSchema = makeSchema();
