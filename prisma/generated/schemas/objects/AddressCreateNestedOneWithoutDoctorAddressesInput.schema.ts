import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutDoctorAddressesInputObjectSchema } from './AddressCreateWithoutDoctorAddressesInput.schema';
import { AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutDoctorAddressesInput.schema';
import { AddressCreateOrConnectWithoutDoctorAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutDoctorAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutDoctorAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const AddressCreateNestedOneWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateNestedOneWithoutDoctorAddressesInput>;
export const AddressCreateNestedOneWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
