import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingCreateNestedOneWithoutValuesInputObjectSchema } from './AppSettingCreateNestedOneWithoutValuesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  setting: z.lazy(() => AppSettingCreateNestedOneWithoutValuesInputObjectSchema)
}).strict();
export const AppSettingValueCreateInputObjectSchema: z.ZodType<Prisma.AppSettingValueCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueCreateInput>;
export const AppSettingValueCreateInputObjectZodSchema = makeSchema();
