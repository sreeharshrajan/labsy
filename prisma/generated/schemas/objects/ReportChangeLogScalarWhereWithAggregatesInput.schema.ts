import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumReportChangeLogActionWithAggregatesFilterObjectSchema } from './EnumReportChangeLogActionWithAggregatesFilter.schema';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema'

const reportchangelogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReportChangeLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportChangeLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReportChangeLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReportChangeLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReportChangeLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  reportId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  changedById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  editVersion: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  changes: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  timestamp: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  conflictResolved: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  action: z.union([z.lazy(() => EnumReportChangeLogActionWithAggregatesFilterObjectSchema), ReportChangeLogActionSchema]).optional()
}).strict();
export const ReportChangeLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReportChangeLogScalarWhereWithAggregatesInput> = reportchangelogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReportChangeLogScalarWhereWithAggregatesInput>;
export const ReportChangeLogScalarWhereWithAggregatesInputObjectZodSchema = reportchangelogscalarwherewithaggregatesinputSchema;
