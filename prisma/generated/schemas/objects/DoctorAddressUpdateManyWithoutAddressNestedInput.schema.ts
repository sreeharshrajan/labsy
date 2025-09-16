import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressCreateWithoutAddressInputObjectSchema } from './DoctorAddressCreateWithoutAddressInput.schema';
import { DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutAddressInput.schema';
import { DoctorAddressCreateOrConnectWithoutAddressInputObjectSchema } from './DoctorAddressCreateOrConnectWithoutAddressInput.schema';
import { DoctorAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema } from './DoctorAddressUpsertWithWhereUniqueWithoutAddressInput.schema';
import { DoctorAddressCreateManyAddressInputEnvelopeObjectSchema } from './DoctorAddressCreateManyAddressInputEnvelope.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema } from './DoctorAddressUpdateWithWhereUniqueWithoutAddressInput.schema';
import { DoctorAddressUpdateManyWithWhereWithoutAddressInputObjectSchema } from './DoctorAddressUpdateManyWithWhereWithoutAddressInput.schema';
import { DoctorAddressScalarWhereInputObjectSchema } from './DoctorAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorAddressUpdateManyWithWhereWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUpdateManyWithWhereWithoutAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorAddressScalarWhereInputObjectSchema), z.lazy(() => DoctorAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorAddressUpdateManyWithoutAddressNestedInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateManyWithoutAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateManyWithoutAddressNestedInput>;
export const DoctorAddressUpdateManyWithoutAddressNestedInputObjectZodSchema = makeSchema();
