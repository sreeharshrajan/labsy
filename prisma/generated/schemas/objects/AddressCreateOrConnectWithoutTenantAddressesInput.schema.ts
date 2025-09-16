import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressCreateWithoutTenantAddressesInputObjectSchema } from './AddressCreateWithoutTenantAddressesInput.schema';
import { AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutTenantAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AddressCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema)])
}).strict();
export const AddressCreateOrConnectWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateOrConnectWithoutTenantAddressesInput>;
export const AddressCreateOrConnectWithoutTenantAddressesInputObjectZodSchema = makeSchema();
