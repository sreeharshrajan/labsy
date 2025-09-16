import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserAddressesInputObjectSchema } from './UserCreateWithoutUserAddressesInput.schema';
import { UserUncheckedCreateWithoutUserAddressesInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserAddressesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutUserAddressesInput>;
export const UserCreateOrConnectWithoutUserAddressesInputObjectZodSchema = makeSchema();
