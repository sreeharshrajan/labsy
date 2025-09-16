import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateWithoutCustomerAddressesInput.schema';
import { CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerUncheckedCreateWithoutCustomerAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutCustomerAddressesInput>;
export const CustomerCreateOrConnectWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
