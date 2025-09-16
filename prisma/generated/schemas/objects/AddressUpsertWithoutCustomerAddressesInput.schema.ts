import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressUpdateWithoutCustomerAddressesInputObjectSchema } from './AddressUpdateWithoutCustomerAddressesInput.schema';
import { AddressUncheckedUpdateWithoutCustomerAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutCustomerAddressesInput.schema';
import { AddressCreateWithoutCustomerAddressesInputObjectSchema } from './AddressCreateWithoutCustomerAddressesInput.schema';
import { AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutCustomerAddressesInput.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AddressUpdateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutCustomerAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => AddressCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema)]),
  where: z.lazy(() => AddressWhereInputObjectSchema).optional()
}).strict();
export const AddressUpsertWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpsertWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpsertWithoutCustomerAddressesInput>;
export const AddressUpsertWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
