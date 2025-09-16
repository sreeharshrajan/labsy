import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingUpdateWithoutValuesInputObjectSchema } from './AppSettingUpdateWithoutValuesInput.schema';
import { AppSettingUncheckedUpdateWithoutValuesInputObjectSchema } from './AppSettingUncheckedUpdateWithoutValuesInput.schema';
import { AppSettingCreateWithoutValuesInputObjectSchema } from './AppSettingCreateWithoutValuesInput.schema';
import { AppSettingUncheckedCreateWithoutValuesInputObjectSchema } from './AppSettingUncheckedCreateWithoutValuesInput.schema';
import { AppSettingWhereInputObjectSchema } from './AppSettingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AppSettingUpdateWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUncheckedUpdateWithoutValuesInputObjectSchema)]),
  create: z.union([z.lazy(() => AppSettingCreateWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUncheckedCreateWithoutValuesInputObjectSchema)]),
  where: z.lazy(() => AppSettingWhereInputObjectSchema).optional()
}).strict();
export const AppSettingUpsertWithoutValuesInputObjectSchema: z.ZodType<Prisma.AppSettingUpsertWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingUpsertWithoutValuesInput>;
export const AppSettingUpsertWithoutValuesInputObjectZodSchema = makeSchema();
