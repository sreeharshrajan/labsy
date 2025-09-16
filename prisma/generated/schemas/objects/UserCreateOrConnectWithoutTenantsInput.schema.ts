import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTenantsInputObjectSchema } from './UserCreateWithoutTenantsInput.schema';
import { UserUncheckedCreateWithoutTenantsInputObjectSchema } from './UserUncheckedCreateWithoutTenantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTenantsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTenantsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTenantsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTenantsInput>;
export const UserCreateOrConnectWithoutTenantsInputObjectZodSchema = makeSchema();
