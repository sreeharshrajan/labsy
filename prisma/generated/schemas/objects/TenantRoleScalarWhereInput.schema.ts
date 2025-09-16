import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tenantrolescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantRoleScalarWhereInputObjectSchema), z.lazy(() => TenantRoleScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantRoleScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantRoleScalarWhereInputObjectSchema), z.lazy(() => TenantRoleScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isSystem: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  systemRoleTemplateId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TenantRoleScalarWhereInputObjectSchema: z.ZodType<Prisma.TenantRoleScalarWhereInput> = tenantrolescalarwhereinputSchema as unknown as z.ZodType<Prisma.TenantRoleScalarWhereInput>;
export const TenantRoleScalarWhereInputObjectZodSchema = tenantrolescalarwhereinputSchema;
