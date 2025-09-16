import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutUserAddressesInputObjectSchema } from './UserCreateNestedOneWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserAddressesInputObjectSchema)
}).strict();
export const UserAddressCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserAddressCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateWithoutAddressInput>;
export const UserAddressCreateWithoutAddressInputObjectZodSchema = makeSchema();
