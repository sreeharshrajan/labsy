import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressCreateWithoutDoctorAddressesInputObjectSchema } from './AddressCreateWithoutDoctorAddressesInput.schema';
import { AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AddressCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema)])
}).strict();
export const AddressCreateOrConnectWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateOrConnectWithoutDoctorAddressesInput>;
export const AddressCreateOrConnectWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
