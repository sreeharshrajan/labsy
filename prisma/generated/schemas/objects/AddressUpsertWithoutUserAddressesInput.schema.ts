import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressUpdateWithoutUserAddressesInputObjectSchema } from './AddressUpdateWithoutUserAddressesInput.schema';
import { AddressUncheckedUpdateWithoutUserAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutUserAddressesInput.schema';
import { AddressCreateWithoutUserAddressesInputObjectSchema } from './AddressCreateWithoutUserAddressesInput.schema';
import { AddressUncheckedCreateWithoutUserAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutUserAddressesInput.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AddressUpdateWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutUserAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => AddressCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutUserAddressesInputObjectSchema)]),
  where: z.lazy(() => AddressWhereInputObjectSchema).optional()
}).strict();
export const AddressUpsertWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpsertWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpsertWithoutUserAddressesInput>;
export const AddressUpsertWithoutUserAddressesInputObjectZodSchema = makeSchema();
