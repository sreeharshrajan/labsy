import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressCreateWithoutDoctorInputObjectSchema } from './DoctorAddressCreateWithoutDoctorInput.schema';
import { DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutDoctorInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorAddressCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateOrConnectWithoutDoctorInput>;
export const DoctorAddressCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
