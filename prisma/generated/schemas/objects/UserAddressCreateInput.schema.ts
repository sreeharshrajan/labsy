import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutUserAddressesInputObjectSchema } from './UserCreateNestedOneWithoutUserAddressesInput.schema';
import { AddressCreateNestedOneWithoutUserAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserAddressesInputObjectSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutUserAddressesInputObjectSchema)
}).strict();
export const UserAddressCreateInputObjectSchema: z.ZodType<Prisma.UserAddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateInput>;
export const UserAddressCreateInputObjectZodSchema = makeSchema();
