import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueCreateWithoutSettingInputObjectSchema } from './AppSettingValueCreateWithoutSettingInput.schema';
import { AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedCreateWithoutSettingInput.schema';
import { AppSettingValueCreateOrConnectWithoutSettingInputObjectSchema } from './AppSettingValueCreateOrConnectWithoutSettingInput.schema';
import { AppSettingValueUpsertWithWhereUniqueWithoutSettingInputObjectSchema } from './AppSettingValueUpsertWithWhereUniqueWithoutSettingInput.schema';
import { AppSettingValueCreateManySettingInputEnvelopeObjectSchema } from './AppSettingValueCreateManySettingInputEnvelope.schema';
import { AppSettingValueWhereUniqueInputObjectSchema } from './AppSettingValueWhereUniqueInput.schema';
import { AppSettingValueUpdateWithWhereUniqueWithoutSettingInputObjectSchema } from './AppSettingValueUpdateWithWhereUniqueWithoutSettingInput.schema';
import { AppSettingValueUpdateManyWithWhereWithoutSettingInputObjectSchema } from './AppSettingValueUpdateManyWithWhereWithoutSettingInput.schema';
import { AppSettingValueScalarWhereInputObjectSchema } from './AppSettingValueScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AppSettingValueCreateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueCreateWithoutSettingInputObjectSchema).array(), z.lazy(() => AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AppSettingValueCreateOrConnectWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueCreateOrConnectWithoutSettingInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AppSettingValueUpsertWithWhereUniqueWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUpsertWithWhereUniqueWithoutSettingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AppSettingValueCreateManySettingInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema), z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema), z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema), z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema), z.lazy(() => AppSettingValueWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AppSettingValueUpdateWithWhereUniqueWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUpdateWithWhereUniqueWithoutSettingInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AppSettingValueUpdateManyWithWhereWithoutSettingInputObjectSchema), z.lazy(() => AppSettingValueUpdateManyWithWhereWithoutSettingInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AppSettingValueScalarWhereInputObjectSchema), z.lazy(() => AppSettingValueScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AppSettingValueUncheckedUpdateManyWithoutSettingNestedInputObjectSchema: z.ZodType<Prisma.AppSettingValueUncheckedUpdateManyWithoutSettingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueUncheckedUpdateManyWithoutSettingNestedInput>;
export const AppSettingValueUncheckedUpdateManyWithoutSettingNestedInputObjectZodSchema = makeSchema();
