import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressUpdateWithoutTenantAddressesInputObjectSchema } from './AddressUpdateWithoutTenantAddressesInput.schema';
import { AddressUncheckedUpdateWithoutTenantAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutTenantAddressesInput.schema';
import { AddressCreateWithoutTenantAddressesInputObjectSchema } from './AddressCreateWithoutTenantAddressesInput.schema';
import { AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutTenantAddressesInput.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AddressUpdateWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutTenantAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => AddressCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema)]),
  where: z.lazy(() => AddressWhereInputObjectSchema).optional()
}).strict();
export const AddressUpsertWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpsertWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpsertWithoutTenantAddressesInput>;
export const AddressUpsertWithoutTenantAddressesInputObjectZodSchema = makeSchema();
