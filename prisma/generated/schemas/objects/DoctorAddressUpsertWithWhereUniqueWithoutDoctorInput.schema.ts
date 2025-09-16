import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressUpdateWithoutDoctorInputObjectSchema } from './DoctorAddressUpdateWithoutDoctorInput.schema';
import { DoctorAddressUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorAddressUncheckedUpdateWithoutDoctorInput.schema';
import { DoctorAddressCreateWithoutDoctorInputObjectSchema } from './DoctorAddressCreateWithoutDoctorInput.schema';
import { DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorAddressUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorAddressUpsertWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpsertWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpsertWithWhereUniqueWithoutDoctorInput>;
export const DoctorAddressUpsertWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
