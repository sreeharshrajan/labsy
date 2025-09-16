import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReportChangeLogActionFilterObjectSchema } from './NestedEnumReportChangeLogActionFilter.schema'

const nestedenumreportchangelogactionwithaggregatesfilterSchema = z.object({
  equals: ReportChangeLogActionSchema.optional(),
  in: ReportChangeLogActionSchema.array().optional(),
  notIn: ReportChangeLogActionSchema.array().optional(),
  not: z.union([ReportChangeLogActionSchema, z.lazy(() => NestedEnumReportChangeLogActionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReportChangeLogActionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReportChangeLogActionFilterObjectSchema).optional()
}).strict();
export const NestedEnumReportChangeLogActionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumReportChangeLogActionWithAggregatesFilter> = nestedenumreportchangelogactionwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReportChangeLogActionWithAggregatesFilter>;
export const NestedEnumReportChangeLogActionWithAggregatesFilterObjectZodSchema = nestedenumreportchangelogactionwithaggregatesfilterSchema;
