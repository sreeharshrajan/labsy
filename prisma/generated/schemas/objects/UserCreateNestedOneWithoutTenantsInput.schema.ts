import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTenantsInputObjectSchema } from './UserCreateWithoutTenantsInput.schema';
import { UserUncheckedCreateWithoutTenantsInputObjectSchema } from './UserUncheckedCreateWithoutTenantsInput.schema';
import { UserCreateOrConnectWithoutTenantsInputObjectSchema } from './UserCreateOrConnectWithoutTenantsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTenantsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTenantsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTenantsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTenantsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTenantsInput>;
export const UserCreateNestedOneWithoutTenantsInputObjectZodSchema = makeSchema();
