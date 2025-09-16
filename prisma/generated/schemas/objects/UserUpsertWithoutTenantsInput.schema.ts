import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutTenantsInputObjectSchema } from './UserUpdateWithoutTenantsInput.schema';
import { UserUncheckedUpdateWithoutTenantsInputObjectSchema } from './UserUncheckedUpdateWithoutTenantsInput.schema';
import { UserCreateWithoutTenantsInputObjectSchema } from './UserCreateWithoutTenantsInput.schema';
import { UserUncheckedCreateWithoutTenantsInputObjectSchema } from './UserUncheckedCreateWithoutTenantsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTenantsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTenantsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTenantsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTenantsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTenantsInput>;
export const UserUpsertWithoutTenantsInputObjectZodSchema = makeSchema();
