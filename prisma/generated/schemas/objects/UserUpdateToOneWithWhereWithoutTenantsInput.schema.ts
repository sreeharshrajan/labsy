import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTenantsInputObjectSchema } from './UserUpdateWithoutTenantsInput.schema';
import { UserUncheckedUpdateWithoutTenantsInputObjectSchema } from './UserUncheckedUpdateWithoutTenantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTenantsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTenantsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTenantsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTenantsInput>;
export const UserUpdateToOneWithWhereWithoutTenantsInputObjectZodSchema = makeSchema();
