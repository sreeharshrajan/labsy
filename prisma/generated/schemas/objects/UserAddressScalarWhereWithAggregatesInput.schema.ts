import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const useraddressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserAddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const UserAddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserAddressScalarWhereWithAggregatesInput> = useraddressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserAddressScalarWhereWithAggregatesInput>;
export const UserAddressScalarWhereWithAggregatesInputObjectZodSchema = useraddressscalarwherewithaggregatesinputSchema;
