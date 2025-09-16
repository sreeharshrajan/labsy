import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueWhereUniqueInputObjectSchema } from './AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueUpdateWithoutSettingInputObjectSchema } from './AppSettingValueUpdateWithoutSettingInput.schema';
import { AppSettingValueUncheckedUpdateWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedUpdateWithoutSettingInput.schema';
import { AppSettingValueCreateWithoutSettingInputObjectSchema } from './AppSettingValueCreateWithoutSettingInput.schema';
import { AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedCreateWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AppSettingValueUpdateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUncheckedUpdateWithoutSettingInputObjectSchema)]),
  create: z.union([z.lazy(() => AppSettingValueCreateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema)])
}).strict();
export const AppSettingValueUpsertWithWhereUniqueWithoutSettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueUpsertWithWhereUniqueWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueUpsertWithWhereUniqueWithoutSettingInput>;
export const AppSettingValueUpsertWithWhereUniqueWithoutSettingInputObjectZodSchema = makeSchema();
