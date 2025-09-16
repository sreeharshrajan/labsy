import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tenantrolescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantRoleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantRoleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantRoleScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantRoleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantRoleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  isSystem: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  systemRoleTemplateId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantRoleScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TenantRoleScalarWhereWithAggregatesInput> = tenantrolescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TenantRoleScalarWhereWithAggregatesInput>;
export const TenantRoleScalarWhereWithAggregatesInputObjectZodSchema = tenantrolescalarwherewithaggregatesinputSchema;
