import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppSettingOrderByWithRelationInputObjectSchema } from './AppSettingOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  settingId: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  setting: z.lazy(() => AppSettingOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AppSettingValueOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AppSettingValueOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueOrderByWithRelationInput>;
export const AppSettingValueOrderByWithRelationInputObjectZodSchema = makeSchema();
