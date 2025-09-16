import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { AddressScalarRelationFilterObjectSchema } from './AddressScalarRelationFilter.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const useraddresswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserAddressWhereInputObjectSchema), z.lazy(() => UserAddressWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserAddressWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserAddressWhereInputObjectSchema), z.lazy(() => UserAddressWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  address: z.union([z.lazy(() => AddressScalarRelationFilterObjectSchema), z.lazy(() => AddressWhereInputObjectSchema)]).optional()
}).strict();
export const UserAddressWhereInputObjectSchema: z.ZodType<Prisma.UserAddressWhereInput> = useraddresswhereinputSchema as unknown as z.ZodType<Prisma.UserAddressWhereInput>;
export const UserAddressWhereInputObjectZodSchema = useraddresswhereinputSchema;
