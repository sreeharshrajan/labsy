import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateWithoutDoctorAddressesInput.schema';
import { DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorAddressesInput>;
export const DoctorCreateOrConnectWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
