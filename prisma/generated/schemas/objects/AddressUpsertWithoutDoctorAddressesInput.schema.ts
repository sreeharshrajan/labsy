import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressUpdateWithoutDoctorAddressesInputObjectSchema } from './AddressUpdateWithoutDoctorAddressesInput.schema';
import { AddressUncheckedUpdateWithoutDoctorAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutDoctorAddressesInput.schema';
import { AddressCreateWithoutDoctorAddressesInputObjectSchema } from './AddressCreateWithoutDoctorAddressesInput.schema';
import { AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutDoctorAddressesInput.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AddressUpdateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutDoctorAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => AddressCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema)]),
  where: z.lazy(() => AddressWhereInputObjectSchema).optional()
}).strict();
export const AddressUpsertWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpsertWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpsertWithoutDoctorAddressesInput>;
export const AddressUpsertWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
