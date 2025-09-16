import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutCustomerAddressesInputObjectSchema } from './AddressCreateWithoutCustomerAddressesInput.schema';
import { AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutCustomerAddressesInput.schema';
import { AddressCreateOrConnectWithoutCustomerAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutCustomerAddressesInput.schema';
import { AddressUpsertWithoutCustomerAddressesInputObjectSchema } from './AddressUpsertWithoutCustomerAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressUpdateToOneWithWhereWithoutCustomerAddressesInputObjectSchema } from './AddressUpdateToOneWithWhereWithoutCustomerAddressesInput.schema';
import { AddressUpdateWithoutCustomerAddressesInputObjectSchema } from './AddressUpdateWithoutCustomerAddressesInput.schema';
import { AddressUncheckedUpdateWithoutCustomerAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutCustomerAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutCustomerAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutCustomerAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutCustomerAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AddressUpdateToOneWithWhereWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUpdateWithoutCustomerAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutCustomerAddressesInputObjectSchema)]).optional()
}).strict();
export const AddressUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutCustomerAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateOneRequiredWithoutCustomerAddressesNestedInput>;
export const AddressUpdateOneRequiredWithoutCustomerAddressesNestedInputObjectZodSchema = makeSchema();
