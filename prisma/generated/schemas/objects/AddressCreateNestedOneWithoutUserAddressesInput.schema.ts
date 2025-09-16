import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutUserAddressesInputObjectSchema } from './AddressCreateWithoutUserAddressesInput.schema';
import { AddressUncheckedCreateWithoutUserAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutUserAddressesInput.schema';
import { AddressCreateOrConnectWithoutUserAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutUserAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutUserAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutUserAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const AddressCreateNestedOneWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateNestedOneWithoutUserAddressesInput>;
export const AddressCreateNestedOneWithoutUserAddressesInputObjectZodSchema = makeSchema();
