import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressWhereInputObjectSchema } from './UserAddressWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => UserAddressWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserAddressWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserAddressWhereInputObjectSchema).optional()
}).strict();
export const UserAddressListRelationFilterObjectSchema: z.ZodType<Prisma.UserAddressListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressListRelationFilter>;
export const UserAddressListRelationFilterObjectZodSchema = makeSchema();
