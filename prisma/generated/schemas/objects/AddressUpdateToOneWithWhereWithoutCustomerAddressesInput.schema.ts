import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { AddressUpdateWithoutCustomerAddressesInputObjectSchema } from './AddressUpdateWithoutCustomerAddressesInput.schema';
import { AddressUncheckedUpdateWithoutCustomerAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutCustomerAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AddressUpdateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutCustomerAddressesInputObjectSchema)])
}).strict();
export const AddressUpdateToOneWithWhereWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutCustomerAddressesInput>;
export const AddressUpdateToOneWithWhereWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
