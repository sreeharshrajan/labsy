import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressUpdateWithoutDoctorInputObjectSchema } from './DoctorAddressUpdateWithoutDoctorInput.schema';
import { DoctorAddressUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorAddressUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorAddressUpdateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorAddressUpdateWithWhereUniqueWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateWithWhereUniqueWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateWithWhereUniqueWithoutDoctorInput>;
export const DoctorAddressUpdateWithWhereUniqueWithoutDoctorInputObjectZodSchema = makeSchema();
