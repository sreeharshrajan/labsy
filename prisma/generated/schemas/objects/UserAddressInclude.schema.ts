import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional()
}).strict();
export const UserAddressIncludeObjectSchema: z.ZodType<Prisma.UserAddressInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressInclude>;
export const UserAddressIncludeObjectZodSchema = makeSchema();
