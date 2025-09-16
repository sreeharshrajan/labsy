import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueWhereUniqueInputObjectSchema } from './AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueCreateWithoutSettingInputObjectSchema } from './AppSettingValueCreateWithoutSettingInput.schema';
import { AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedCreateWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AppSettingValueCreateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema)])
}).strict();
export const AppSettingValueCreateOrConnectWithoutSettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueCreateOrConnectWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueCreateOrConnectWithoutSettingInput>;
export const AppSettingValueCreateOrConnectWithoutSettingInputObjectZodSchema = makeSchema();
