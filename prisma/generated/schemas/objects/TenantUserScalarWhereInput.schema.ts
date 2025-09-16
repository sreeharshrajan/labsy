import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tenantuserscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantUserScalarWhereInputObjectSchema), z.lazy(() => TenantUserScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantUserScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantUserScalarWhereInputObjectSchema), z.lazy(() => TenantUserScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantUserScalarWhereInputObjectSchema: z.ZodType<Prisma.TenantUserScalarWhereInput> = tenantuserscalarwhereinputSchema as unknown as z.ZodType<Prisma.TenantUserScalarWhereInput>;
export const TenantUserScalarWhereInputObjectZodSchema = tenantuserscalarwhereinputSchema;
