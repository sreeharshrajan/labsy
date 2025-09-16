import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumReportChangeLogActionFilterObjectSchema } from './EnumReportChangeLogActionFilter.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema'

const reportchangelogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema), z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema), z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  reportId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  changedById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  editVersion: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  changes: z.lazy(() => JsonFilterObjectSchema).optional(),
  timestamp: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  conflictResolved: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  action: z.union([z.lazy(() => EnumReportChangeLogActionFilterObjectSchema), ReportChangeLogActionSchema]).optional()
}).strict();
export const ReportChangeLogScalarWhereInputObjectSchema: z.ZodType<Prisma.ReportChangeLogScalarWhereInput> = reportchangelogscalarwhereinputSchema as unknown as z.ZodType<Prisma.ReportChangeLogScalarWhereInput>;
export const ReportChangeLogScalarWhereInputObjectZodSchema = reportchangelogscalarwhereinputSchema;
