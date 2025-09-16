import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tenantuserrolescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantUserRoleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantUserRoleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantUserRoleScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantUserRoleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantUserRoleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  tenantUserId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantUserRoleScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TenantUserRoleScalarWhereWithAggregatesInput> = tenantuserrolescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TenantUserRoleScalarWhereWithAggregatesInput>;
export const TenantUserRoleScalarWhereWithAggregatesInputObjectZodSchema = tenantuserrolescalarwherewithaggregatesinputSchema;
