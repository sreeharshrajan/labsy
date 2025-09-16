import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutCustomerAddressesInputObjectSchema } from './AddressCreateWithoutCustomerAddressesInput.schema';
import { AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutCustomerAddressesInput.schema';
import { AddressCreateOrConnectWithoutCustomerAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutCustomerAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutCustomerAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const AddressCreateNestedOneWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateNestedOneWithoutCustomerAddressesInput>;
export const AddressCreateNestedOneWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
