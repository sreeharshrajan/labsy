import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { AddressUpdateWithoutTenantAddressesInputObjectSchema } from './AddressUpdateWithoutTenantAddressesInput.schema';
import { AddressUncheckedUpdateWithoutTenantAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutTenantAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AddressUpdateWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutTenantAddressesInputObjectSchema)])
}).strict();
export const AddressUpdateToOneWithWhereWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutTenantAddressesInput>;
export const AddressUpdateToOneWithWhereWithoutTenantAddressesInputObjectZodSchema = makeSchema();
