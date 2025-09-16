import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueUncheckedCreateNestedManyWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedCreateNestedManyWithoutSettingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  values: z.lazy(() => AppSettingValueUncheckedCreateNestedManyWithoutSettingInputObjectSchema)
}).strict();
export const AppSettingUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AppSettingUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingUncheckedCreateInput>;
export const AppSettingUncheckedCreateInputObjectZodSchema = makeSchema();
