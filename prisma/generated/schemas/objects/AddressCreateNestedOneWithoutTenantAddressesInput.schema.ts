import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutTenantAddressesInputObjectSchema } from './AddressCreateWithoutTenantAddressesInput.schema';
import { AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutTenantAddressesInput.schema';
import { AddressCreateOrConnectWithoutTenantAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutTenantAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutTenantAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const AddressCreateNestedOneWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateNestedOneWithoutTenantAddressesInput>;
export const AddressCreateNestedOneWithoutTenantAddressesInputObjectZodSchema = makeSchema();
