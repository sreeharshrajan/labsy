import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingCreateWithoutValuesInputObjectSchema } from './AppSettingCreateWithoutValuesInput.schema';
import { AppSettingUncheckedCreateWithoutValuesInputObjectSchema } from './AppSettingUncheckedCreateWithoutValuesInput.schema';
import { AppSettingCreateOrConnectWithoutValuesInputObjectSchema } from './AppSettingCreateOrConnectWithoutValuesInput.schema';
import { AppSettingUpsertWithoutValuesInputObjectSchema } from './AppSettingUpsertWithoutValuesInput.schema';
import { AppSettingWhereUniqueInputObjectSchema } from './AppSettingWhereUniqueInput.schema';
import { AppSettingUpdateToOneWithWhereWithoutValuesInputObjectSchema } from './AppSettingUpdateToOneWithWhereWithoutValuesInput.schema';
import { AppSettingUpdateWithoutValuesInputObjectSchema } from './AppSettingUpdateWithoutValuesInput.schema';
import { AppSettingUncheckedUpdateWithoutValuesInputObjectSchema } from './AppSettingUncheckedUpdateWithoutValuesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppSettingCreateWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUncheckedCreateWithoutValuesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppSettingCreateOrConnectWithoutValuesInputObjectSchema).optional(),
  upsert: z.lazy(() => AppSettingUpsertWithoutValuesInputObjectSchema).optional(),
  connect: z.lazy(() => AppSettingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AppSettingUpdateToOneWithWhereWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUpdateWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUncheckedUpdateWithoutValuesInputObjectSchema)]).optional()
}).strict();
export const AppSettingUpdateOneRequiredWithoutValuesNestedInputObjectSchema: z.ZodType<Prisma.AppSettingUpdateOneRequiredWithoutValuesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingUpdateOneRequiredWithoutValuesNestedInput>;
export const AppSettingUpdateOneRequiredWithoutValuesNestedInputObjectZodSchema = makeSchema();
