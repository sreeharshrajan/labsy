import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateNestedOneWithoutUserAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutUserAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutUserAddressesInputObjectSchema)
}).strict();
export const UserAddressCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserAddressCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateWithoutUserInput>;
export const UserAddressCreateWithoutUserInputObjectZodSchema = makeSchema();
