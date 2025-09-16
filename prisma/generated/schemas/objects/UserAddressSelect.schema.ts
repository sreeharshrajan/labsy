import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional()
}).strict();
export const UserAddressSelectObjectSchema: z.ZodType<Prisma.UserAddressSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressSelect>;
export const UserAddressSelectObjectZodSchema = makeSchema();
