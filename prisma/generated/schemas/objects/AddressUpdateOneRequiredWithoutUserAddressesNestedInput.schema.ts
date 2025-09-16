import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutUserAddressesInputObjectSchema } from './AddressCreateWithoutUserAddressesInput.schema';
import { AddressUncheckedCreateWithoutUserAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutUserAddressesInput.schema';
import { AddressCreateOrConnectWithoutUserAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutUserAddressesInput.schema';
import { AddressUpsertWithoutUserAddressesInputObjectSchema } from './AddressUpsertWithoutUserAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressUpdateToOneWithWhereWithoutUserAddressesInputObjectSchema } from './AddressUpdateToOneWithWhereWithoutUserAddressesInput.schema';
import { AddressUpdateWithoutUserAddressesInputObjectSchema } from './AddressUpdateWithoutUserAddressesInput.schema';
import { AddressUncheckedUpdateWithoutUserAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutUserAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutUserAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutUserAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AddressUpdateToOneWithWhereWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUpdateWithoutUserAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutUserAddressesInputObjectSchema)]).optional()
}).strict();
export const AddressUpdateOneRequiredWithoutUserAddressesNestedInputObjectSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutUserAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateOneRequiredWithoutUserAddressesNestedInput>;
export const AddressUpdateOneRequiredWithoutUserAddressesNestedInputObjectZodSchema = makeSchema();
