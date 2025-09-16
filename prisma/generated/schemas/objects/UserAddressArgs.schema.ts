import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressSelectObjectSchema } from './UserAddressSelect.schema';
import { UserAddressIncludeObjectSchema } from './UserAddressInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserAddressSelectObjectSchema).optional(),
  include: z.lazy(() => UserAddressIncludeObjectSchema).optional()
}).strict();
export const UserAddressArgsObjectSchema = makeSchema();
export const UserAddressArgsObjectZodSchema = makeSchema();
