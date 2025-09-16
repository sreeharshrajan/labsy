import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const servicecategoryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ServiceCategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ServiceCategoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryScalarWhereWithAggregatesInput> = servicecategoryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ServiceCategoryScalarWhereWithAggregatesInput>;
export const ServiceCategoryScalarWhereWithAggregatesInputObjectZodSchema = servicecategoryscalarwherewithaggregatesinputSchema;
