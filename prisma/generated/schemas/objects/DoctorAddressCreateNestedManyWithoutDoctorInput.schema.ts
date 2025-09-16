import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressCreateWithoutDoctorInputObjectSchema } from './DoctorAddressCreateWithoutDoctorInput.schema';
import { DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutDoctorInput.schema';
import { DoctorAddressCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorAddressCreateOrConnectWithoutDoctorInput.schema';
import { DoctorAddressCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorAddressCreateManyDoctorInputEnvelope.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressCreateWithoutDoctorInputObjectSchema).array(), z.lazy(() => DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorAddressCreateOrConnectWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressCreateOrConnectWithoutDoctorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorAddressCreateManyDoctorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorAddressCreateNestedManyWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateNestedManyWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateNestedManyWithoutDoctorInput>;
export const DoctorAddressCreateNestedManyWithoutDoctorInputObjectZodSchema = makeSchema();
