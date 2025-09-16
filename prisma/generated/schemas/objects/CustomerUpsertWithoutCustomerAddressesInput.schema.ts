import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutCustomerAddressesInputObjectSchema } from './CustomerUpdateWithoutCustomerAddressesInput.schema';
import { CustomerUncheckedUpdateWithoutCustomerAddressesInputObjectSchema } from './CustomerUncheckedUpdateWithoutCustomerAddressesInput.schema';
import { CustomerCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateWithoutCustomerAddressesInput.schema';
import { CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerUncheckedCreateWithoutCustomerAddressesInput.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutCustomerAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutCustomerAddressesInput>;
export const CustomerUpsertWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
