import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutUserAddressesInputObjectSchema } from './UserCreateWithoutUserAddressesInput.schema';
import { UserUncheckedCreateWithoutUserAddressesInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressesInput.schema';
import { UserCreateOrConnectWithoutUserAddressesInputObjectSchema } from './UserCreateOrConnectWithoutUserAddressesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutUserAddressesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutUserAddressesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutUserAddressesInput>;
export const UserCreateNestedOneWithoutUserAddressesInputObjectZodSchema = makeSchema();
