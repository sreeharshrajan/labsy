import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingCreateWithoutValuesInputObjectSchema } from './AppSettingCreateWithoutValuesInput.schema';
import { AppSettingUncheckedCreateWithoutValuesInputObjectSchema } from './AppSettingUncheckedCreateWithoutValuesInput.schema';
import { AppSettingCreateOrConnectWithoutValuesInputObjectSchema } from './AppSettingCreateOrConnectWithoutValuesInput.schema';
import { AppSettingWhereUniqueInputObjectSchema } from './AppSettingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppSettingCreateWithoutValuesInputObjectSchema), z.lazy(() => AppSettingUncheckedCreateWithoutValuesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AppSettingCreateOrConnectWithoutValuesInputObjectSchema).optional(),
  connect: z.lazy(() => AppSettingWhereUniqueInputObjectSchema).optional()
}).strict();
export const AppSettingCreateNestedOneWithoutValuesInputObjectSchema: z.ZodType<Prisma.AppSettingCreateNestedOneWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingCreateNestedOneWithoutValuesInput>;
export const AppSettingCreateNestedOneWithoutValuesInputObjectZodSchema = makeSchema();
