import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTenantsInputObjectSchema } from './UserCreateWithoutTenantsInput.schema';
import { UserUncheckedCreateWithoutTenantsInputObjectSchema } from './UserUncheckedCreateWithoutTenantsInput.schema';
import { UserCreateOrConnectWithoutTenantsInputObjectSchema } from './UserCreateOrConnectWithoutTenantsInput.schema';
import { UserUpsertWithoutTenantsInputObjectSchema } from './UserUpsertWithoutTenantsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTenantsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTenantsInput.schema';
import { UserUpdateWithoutTenantsInputObjectSchema } from './UserUpdateWithoutTenantsInput.schema';
import { UserUncheckedUpdateWithoutTenantsInputObjectSchema } from './UserUncheckedUpdateWithoutTenantsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTenantsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTenantsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTenantsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTenantsInputObjectSchema), z.lazy(() => UserUpdateWithoutTenantsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTenantsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTenantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTenantsNestedInput>;
export const UserUpdateOneRequiredWithoutTenantsNestedInputObjectZodSchema = makeSchema();
