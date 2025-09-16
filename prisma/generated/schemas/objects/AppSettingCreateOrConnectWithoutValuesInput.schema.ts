import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingWhereUniqueInputObjectSchema } from './AppSettingWhereUniqueInput.schema';
import { AppSettingCreateWithoutValuesInputObjectSchema } from './AppSettingCreateWithoutValuesInput.schema';
import { AppSettingUncheckedCreateWithoutValuesInputObjectSchema } from './AppSettingUncheckedCreateWithoutValuesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppSettingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppSettingCreateWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUncheckedCreateWithoutValuesInputObjectSchema)])
}).strict();
export const AppSettingCreateOrConnectWithoutValuesInputObjectSchema: z.ZodType<Prisma.AppSettingCreateOrConnectWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingCreateOrConnectWithoutValuesInput>;
export const AppSettingCreateOrConnectWithoutValuesInputObjectZodSchema = makeSchema();
