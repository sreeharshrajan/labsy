import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const addressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  line1: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  line2: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  zip: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput> = addressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput>;
export const AddressScalarWhereWithAggregatesInputObjectZodSchema = addressscalarwherewithaggregatesinputSchema;
