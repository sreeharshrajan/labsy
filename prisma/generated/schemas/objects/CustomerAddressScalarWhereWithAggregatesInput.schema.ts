import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const customeraddressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomerAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerAddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CustomerAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  customerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CustomerAddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CustomerAddressScalarWhereWithAggregatesInput> = customeraddressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CustomerAddressScalarWhereWithAggregatesInput>;
export const CustomerAddressScalarWhereWithAggregatesInputObjectZodSchema = customeraddressscalarwherewithaggregatesinputSchema;
