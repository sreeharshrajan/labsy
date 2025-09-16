import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingWhereInputObjectSchema } from './AppSettingWhereInput.schema';
import { AppSettingUpdateWithoutValuesInputObjectSchema } from './AppSettingUpdateWithoutValuesInput.schema';
import { AppSettingUncheckedUpdateWithoutValuesInputObjectSchema } from './AppSettingUncheckedUpdateWithoutValuesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppSettingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AppSettingUpdateWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUncheckedUpdateWithoutValuesInputObjectSchema)])
}).strict();
export const AppSettingUpdateToOneWithWhereWithoutValuesInputObjectSchema: z.ZodType<Prisma.AppSettingUpdateToOneWithWhereWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingUpdateToOneWithWhereWithoutValuesInput>;
export const AppSettingUpdateToOneWithWhereWithoutValuesInputObjectZodSchema = makeSchema();
