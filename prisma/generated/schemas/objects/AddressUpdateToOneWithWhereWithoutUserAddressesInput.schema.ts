import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { AddressUpdateWithoutUserAddressesInputObjectSchema } from './AddressUpdateWithoutUserAddressesInput.schema';
import { AddressUncheckedUpdateWithoutUserAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AddressUpdateWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutUserAddressesInputObjectSchema)])
}).strict();
export const AddressUpdateToOneWithWhereWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutUserAddressesInput>;
export const AddressUpdateToOneWithWhereWithoutUserAddressesInputObjectZodSchema = makeSchema();
