import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAuditLogActionFilterObjectSchema } from './EnumAuditLogActionFilter.schema';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const auditlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuditLogWhereInputObjectSchema), z.lazy(() => AuditLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuditLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuditLogWhereInputObjectSchema), z.lazy(() => AuditLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => EnumAuditLogActionFilterObjectSchema), AuditLogActionSchema]).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  entity: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  entityId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ipAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userAgent: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AuditLogWhereInputObjectSchema: z.ZodType<Prisma.AuditLogWhereInput> = auditlogwhereinputSchema as unknown as z.ZodType<Prisma.AuditLogWhereInput>;
export const AuditLogWhereInputObjectZodSchema = auditlogwhereinputSchema;
