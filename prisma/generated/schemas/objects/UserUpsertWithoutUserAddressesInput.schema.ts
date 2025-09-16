import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutUserAddressesInputObjectSchema } from './UserUpdateWithoutUserAddressesInput.schema';
import { UserUncheckedUpdateWithoutUserAddressesInputObjectSchema } from './UserUncheckedUpdateWithoutUserAddressesInput.schema';
import { UserCreateWithoutUserAddressesInputObjectSchema } from './UserCreateWithoutUserAddressesInput.schema';
import { UserUncheckedCreateWithoutUserAddressesInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUserAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserAddressesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutUserAddressesInput>;
export const UserUpsertWithoutUserAddressesInputObjectZodSchema = makeSchema();
