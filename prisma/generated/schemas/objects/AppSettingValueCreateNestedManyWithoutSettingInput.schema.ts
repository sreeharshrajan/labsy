import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueCreateWithoutSettingInputObjectSchema } from './AppSettingValueCreateWithoutSettingInput.schema';
import { AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedCreateWithoutSettingInput.schema';
import { AppSettingValueCreateOrConnectWithoutSettingInputObjectSchema } from './AppSettingValueCreateOrConnectWithoutSettingInput.schema';
import { AppSettingValueCreateManySettingInputEnvelopeObjectSchema } from './AppSettingValueCreateManySettingInputEnvelope.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './AppSettingValueWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppSettingValueCreateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueCreateWithoutSettingInputObjectSchema).array(), z.lazy(() => AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppSettingValueCreateOrConnectWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueCreateOrConnectWithoutSettingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppSettingValueCreateManySettingInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema), z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AppSettingValueCreateNestedManyWithoutSettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueCreateNestedManyWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueCreateNestedManyWithoutSettingInput>;
export const AppSettingValueCreateNestedManyWithoutSettingInputObjectZodSchema = makeSchema();
