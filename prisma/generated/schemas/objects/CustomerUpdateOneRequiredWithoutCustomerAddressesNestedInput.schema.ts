import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateWithoutCustomerAddressesInput.schema';
import { CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './CustomerUncheckedCreateWithoutCustomerAddressesInput.schema';
import { CustomerCreateOrConnectWithoutCustomerAddressesInputObjectSchema } from './CustomerCreateOrConnectWithoutCustomerAddressesInput.schema';
import { CustomerUpsertWithoutCustomerAddressesInputObjectSchema } from './CustomerUpsertWithoutCustomerAddressesInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutCustomerAddressesInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutCustomerAddressesInput.schema';
import { CustomerUpdateWithoutCustomerAddressesInputObjectSchema } from './CustomerUpdateWithoutCustomerAddressesInput.schema';
import { CustomerUncheckedUpdateWithoutCustomerAddressesInputObjectSchema } from './CustomerUncheckedUpdateWithoutCustomerAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutCustomerAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutCustomerAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutCustomerAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUpdateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutCustomerAddressesInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInput>;
export const CustomerUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectZodSchema = makeSchema();
