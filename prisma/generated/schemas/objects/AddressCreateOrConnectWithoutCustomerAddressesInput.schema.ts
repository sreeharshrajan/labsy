import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressCreateWithoutCustomerAddressesInputObjectSchema } from './AddressCreateWithoutCustomerAddressesInput.schema';
import { AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutCustomerAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AddressCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema)])
}).strict();
export const AddressCreateOrConnectWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateOrConnectWithoutCustomerAddressesInput>;
export const AddressCreateOrConnectWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
