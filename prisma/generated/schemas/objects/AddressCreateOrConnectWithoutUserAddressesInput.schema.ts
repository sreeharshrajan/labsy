import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressCreateWithoutUserAddressesInputObjectSchema } from './AddressCreateWithoutUserAddressesInput.schema';
import { AddressUncheckedCreateWithoutUserAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AddressCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutUserAddressesInputObjectSchema)])
}).strict();
export const AddressCreateOrConnectWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateOrConnectWithoutUserAddressesInput>;
export const AddressCreateOrConnectWithoutUserAddressesInputObjectZodSchema = makeSchema();
