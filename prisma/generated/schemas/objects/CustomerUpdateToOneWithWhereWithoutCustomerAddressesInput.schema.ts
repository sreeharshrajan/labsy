import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutCustomerAddressesInputObjectSchema } from './CustomerUpdateWithoutCustomerAddressesInput.schema';
import { CustomerUncheckedUpdateWithoutCustomerAddressesInputObjectSchema } from './CustomerUncheckedUpdateWithoutCustomerAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutCustomerAddressesInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutCustomerAddressesInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutCustomerAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutCustomerAddressesInput>;
export const CustomerUpdateToOneWithWhereWithoutCustomerAddressesInputObjectZodSchema = makeSchema();
