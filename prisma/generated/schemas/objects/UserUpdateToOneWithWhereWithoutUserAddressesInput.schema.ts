import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUserAddressesInputObjectSchema } from './UserUpdateWithoutUserAddressesInput.schema';
import { UserUncheckedUpdateWithoutUserAddressesInputObjectSchema } from './UserUncheckedUpdateWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUserAddressesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserAddressesInput>;
export const UserUpdateToOneWithWhereWithoutUserAddressesInputObjectZodSchema = makeSchema();
