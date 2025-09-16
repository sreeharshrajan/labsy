import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateWithoutCustomerAddressesInput.schema';
import { CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerUncheckedCreateWithoutCustomerAddressesInput.schema';
import { CustomerCreateOrConnectWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateOrConnectWithoutCustomerAddressesInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutCustomerAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutCustomerAddressesInput>;
export const CustomerCreateNestedOneWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
