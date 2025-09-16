import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAuditLogActionFilterObjectSchema } from './EnumAuditLogActionFilter.schema';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const auditlogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuditLogScalarWhereInputObjectSchema), z.lazy(() => AuditLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuditLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuditLogScalarWhereInputObjectSchema), z.lazy(() => AuditLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => EnumAuditLogActionFilterObjectSchema), AuditLogActionSchema]).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  entity: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  entityId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ipAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userAgent: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AuditLogScalarWhereInputObjectSchema: z.ZodType<Prisma.AuditLogScalarWhereInput> = auditlogscalarwhereinputSchema as unknown as z.ZodType<Prisma.AuditLogScalarWhereInput>;
export const AuditLogScalarWhereInputObjectZodSchema = auditlogscalarwhereinputSchema;
