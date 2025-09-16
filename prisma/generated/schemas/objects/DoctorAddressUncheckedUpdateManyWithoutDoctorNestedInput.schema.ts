import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressCreateWithoutDoctorInputObjectSchema } from './DoctorAddressCreateWithoutDoctorInput.schema';
import { DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutDoctorInput.schema';
import { DoctorAddressCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorAddressCreateOrConnectWithoutDoctorInput.schema';
import { DoctorAddressUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorAddressUpsertWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorAddressCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorAddressCreateManyDoctorInputEnvelope.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorAddressUpdateWithWhereUniqueWithoutDoctorInput.schema';
import { DoctorAddressUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './DoctorAddressUpdateManyWithWhereWithoutDoctorInput.schema';
import { DoctorAddressScalarWhereInputObjectSchema } from './DoctorAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorAddressCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DoctorAddressUpsertWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUpsertWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorAddressCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DoctorAddressUpdateWithWhereUniqueWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUpdateWithWhereUniqueWithoutDoctorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DoctorAddressUpdateManyWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUpdateManyWithWhereWithoutDoctorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DoctorAddressScalarWhereInputObjectSchema), z.lazy(() => DoctorAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DoctorAddressUncheckedUpdateManyWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.DoctorAddressUncheckedUpdateManyWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUncheckedUpdateManyWithoutDoctorNestedInput>;
export const DoctorAddressUncheckedUpdateManyWithoutDoctorNestedInputObjectZodSchema = makeSchema();
