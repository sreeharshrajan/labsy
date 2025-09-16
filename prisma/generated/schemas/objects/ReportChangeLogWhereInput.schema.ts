import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumReportChangeLogActionFilterObjectSchema } from './EnumReportChangeLogActionFilter.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema';
import { UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TenantUserScalarRelationFilterObjectSchema } from './TenantUserScalarRelationFilter.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { ReportScalarRelationFilterObjectSchema } from './ReportScalarRelationFilter.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

const reportchangelogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportChangeLogWhereInputObjectSchema), z.lazy(() => ReportChangeLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportChangeLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportChangeLogWhereInputObjectSchema), z.lazy(() => ReportChangeLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reportId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  changedById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  editVersion: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  changes: z.lazy(() => JsonFilterObjectSchema).optional(),
  timestamp: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  conflictResolved: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  action: z.union([z.lazy(() => EnumReportChangeLogActionFilterObjectSchema), ReportChangeLogActionSchema]).optional(),
  User: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  changedBy: z.union([z.lazy(() => TenantUserScalarRelationFilterObjectSchema), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  report: z.union([z.lazy(() => ReportScalarRelationFilterObjectSchema), z.lazy(() => ReportWhereInputObjectSchema)]).optional()
}).strict();
export const ReportChangeLogWhereInputObjectSchema: z.ZodType<Prisma.ReportChangeLogWhereInput> = reportchangelogwhereinputSchema as unknown as z.ZodType<Prisma.ReportChangeLogWhereInput>;
export const ReportChangeLogWhereInputObjectZodSchema = reportchangelogwhereinputSchema;
