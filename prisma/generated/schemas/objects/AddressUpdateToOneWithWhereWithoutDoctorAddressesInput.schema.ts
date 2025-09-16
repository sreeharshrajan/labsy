import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { AddressUpdateWithoutDoctorAddressesInputObjectSchema } from './AddressUpdateWithoutDoctorAddressesInput.schema';
import { AddressUncheckedUpdateWithoutDoctorAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AddressUpdateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutDoctorAddressesInputObjectSchema)])
}).strict();
export const AddressUpdateToOneWithWhereWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutDoctorAddressesInput>;
export const AddressUpdateToOneWithWhereWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
