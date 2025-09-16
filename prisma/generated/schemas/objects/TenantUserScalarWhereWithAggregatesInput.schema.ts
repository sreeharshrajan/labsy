import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tenantuserscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantUserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantUserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantUserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantUserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantUserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantUserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TenantUserScalarWhereWithAggregatesInput> = tenantuserscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TenantUserScalarWhereWithAggregatesInput>;
export const TenantUserScalarWhereWithAggregatesInputObjectZodSchema = tenantuserscalarwherewithaggregatesinputSchema;
