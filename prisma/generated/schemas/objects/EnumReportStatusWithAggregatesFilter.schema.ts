import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportStatusSchema } from '../enums/ReportStatus.schema';
import { NestedEnumReportStatusWithAggregatesFilterObjectSchema } from './NestedEnumReportStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReportStatusFilterObjectSchema } from './NestedEnumReportStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ReportStatusSchema.optional(),
  in: ReportStatusSchema.array().optional(),
  notIn: ReportStatusSchema.array().optional(),
  not: z.union([ReportStatusSchema, z.lazy(() => NestedEnumReportStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReportStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReportStatusFilterObjectSchema).optional()
}).strict();
export const EnumReportStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumReportStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReportStatusWithAggregatesFilter>;
export const EnumReportStatusWithAggregatesFilterObjectZodSchema = makeSchema();
