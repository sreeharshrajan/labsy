import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressCreateWithoutAddressInputObjectSchema } from './DoctorAddressCreateWithoutAddressInput.schema';
import { DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutAddressInput.schema';
import { DoctorAddressCreateOrConnectWithoutAddressInputObjectSchema } from './DoctorAddressCreateOrConnectWithoutAddressInput.schema';
import { DoctorAddressCreateManyAddressInputEnvelopeObjectSchema } from './DoctorAddressCreateManyAddressInputEnvelope.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema), z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorAddressUncheckedCreateNestedManyWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressUncheckedCreateNestedManyWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUncheckedCreateNestedManyWithoutAddressInput>;
export const DoctorAddressUncheckedCreateNestedManyWithoutAddressInputObjectZodSchema = makeSchema();
