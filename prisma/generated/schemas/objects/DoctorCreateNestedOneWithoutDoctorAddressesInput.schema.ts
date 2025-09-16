import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateWithoutDoctorAddressesInput.schema';
import { DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorAddressesInput.schema';
import { DoctorCreateOrConnectWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorAddressesInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional()
}).strict();
export const DoctorCreateNestedOneWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateNestedOneWithoutDoctorAddressesInput>;
export const DoctorCreateNestedOneWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
