import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutUserAddressesInputObjectSchema } from './UserCreateWithoutUserAddressesInput.schema';
import { UserUncheckedCreateWithoutUserAddressesInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressesInput.schema';
import { UserCreateOrConnectWithoutUserAddressesInputObjectSchema } from './UserCreateOrConnectWithoutUserAddressesInput.schema';
import { UserUpsertWithoutUserAddressesInputObjectSchema } from './UserUpsertWithoutUserAddressesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutUserAddressesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutUserAddressesInput.schema';
import { UserUpdateWithoutUserAddressesInputObjectSchema } from './UserUpdateWithoutUserAddressesInput.schema';
import { UserUncheckedUpdateWithoutUserAddressesInputObjectSchema } from './UserUncheckedUpdateWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUpdateWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUserAddressesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutUserAddressesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserAddressesNestedInput>;
export const UserUpdateOneRequiredWithoutUserAddressesNestedInputObjectZodSchema = makeSchema();
