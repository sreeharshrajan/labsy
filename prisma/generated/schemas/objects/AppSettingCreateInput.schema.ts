import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueCreateNestedManyWithoutSettingInputObjectSchema } from './AppSettingValueCreateNestedManyWithoutSettingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  values: z.lazy(() => AppSettingValueCreateNestedManyWithoutSettingInputObjectSchema)
}).strict();
export const AppSettingCreateInputObjectSchema: z.ZodType<Prisma.AppSettingCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingCreateInput>;
export const AppSettingCreateInputObjectZodSchema = makeSchema();
