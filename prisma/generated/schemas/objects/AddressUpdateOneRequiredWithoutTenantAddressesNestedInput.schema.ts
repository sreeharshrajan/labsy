import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutTenantAddressesInputObjectSchema } from './AddressCreateWithoutTenantAddressesInput.schema';
import { AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutTenantAddressesInput.schema';
import { AddressCreateOrConnectWithoutTenantAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutTenantAddressesInput.schema';
import { AddressUpsertWithoutTenantAddressesInputObjectSchema } from './AddressUpsertWithoutTenantAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressUpdateToOneWithWhereWithoutTenantAddressesInputObjectSchema } from './AddressUpdateToOneWithWhereWithoutTenantAddressesInput.schema';
import { AddressUpdateWithoutTenantAddressesInputObjectSchema } from './AddressUpdateWithoutTenantAddressesInput.schema';
import { AddressUncheckedUpdateWithoutTenantAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutTenantAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutTenantAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutTenantAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutTenantAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AddressUpdateToOneWithWhereWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUpdateWithoutTenantAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutTenantAddressesInputObjectSchema)]).optional()
}).strict();
export const AddressUpdateOneRequiredWithoutTenantAddressesNestedInputObjectSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutTenantAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateOneRequiredWithoutTenantAddressesNestedInput>;
export const AddressUpdateOneRequiredWithoutTenantAddressesNestedInputObjectZodSchema = makeSchema();
