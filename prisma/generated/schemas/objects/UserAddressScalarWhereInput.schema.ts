import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const useraddressscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserAddressScalarWhereInputObjectSchema), z.lazy(() => UserAddressScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserAddressScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserAddressScalarWhereInputObjectSchema), z.lazy(() => UserAddressScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserAddressScalarWhereInputObjectSchema: z.ZodType<Prisma.UserAddressScalarWhereInput> = useraddressscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserAddressScalarWhereInput>;
export const UserAddressScalarWhereInputObjectZodSchema = useraddressscalarwhereinputSchema;
