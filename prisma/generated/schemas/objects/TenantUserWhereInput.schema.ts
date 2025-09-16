import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TenantUserRoleListRelationFilterObjectSchema } from './TenantUserRoleListRelationFilter.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema';
import { ReportChangeLogListRelationFilterObjectSchema } from './ReportChangeLogListRelationFilter.schema'

const tenantuserwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantUserWhereInputObjectSchema), z.lazy(() => TenantUserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantUserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantUserWhereInputObjectSchema), z.lazy(() => TenantUserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantRoles: z.lazy(() => TenantUserRoleListRelationFilterObjectSchema).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  Report: z.lazy(() => ReportListRelationFilterObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogListRelationFilterObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportListRelationFilterObjectSchema).optional()
}).strict();
export const TenantUserWhereInputObjectSchema: z.ZodType<Prisma.TenantUserWhereInput> = tenantuserwhereinputSchema as unknown as z.ZodType<Prisma.TenantUserWhereInput>;
export const TenantUserWhereInputObjectZodSchema = tenantuserwhereinputSchema;
