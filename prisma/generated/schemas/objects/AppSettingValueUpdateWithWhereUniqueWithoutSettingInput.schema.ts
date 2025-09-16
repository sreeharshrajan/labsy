import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueWhereUniqueInputObjectSchema } from './AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueUpdateWithoutSettingInputObjectSchema } from './AppSettingValueUpdateWithoutSettingInput.schema';
import { AppSettingValueUncheckedUpdateWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedUpdateWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AppSettingValueUpdateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUncheckedUpdateWithoutSettingInputObjectSchema)])
}).strict();
export const AppSettingValueUpdateWithWhereUniqueWithoutSettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueUpdateWithWhereUniqueWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueUpdateWithWhereUniqueWithoutSettingInput>;
export const AppSettingValueUpdateWithWhereUniqueWithoutSettingInputObjectZodSchema = makeSchema();
