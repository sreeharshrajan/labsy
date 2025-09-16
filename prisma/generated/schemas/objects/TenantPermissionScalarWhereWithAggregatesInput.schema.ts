import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tenantpermissionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantPermissionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantPermissionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantPermissionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  resource: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantPermissionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TenantPermissionScalarWhereWithAggregatesInput> = tenantpermissionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TenantPermissionScalarWhereWithAggregatesInput>;
export const TenantPermissionScalarWhereWithAggregatesInputObjectZodSchema = tenantpermissionscalarwherewithaggregatesinputSchema;
