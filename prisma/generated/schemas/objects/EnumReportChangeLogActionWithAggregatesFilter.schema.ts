import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema';
import { NestedEnumReportChangeLogActionWithAggregatesFilterObjectSchema } from './NestedEnumReportChangeLogActionWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReportChangeLogActionFilterObjectSchema } from './NestedEnumReportChangeLogActionFilter.schema'

const makeSchema = () => z.object({
  equals: ReportChangeLogActionSchema.optional(),
  in: ReportChangeLogActionSchema.array().optional(),
  notIn: ReportChangeLogActionSchema.array().optional(),
  not: z.union([ReportChangeLogActionSchema, z.lazy(() => NestedEnumReportChangeLogActionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReportChangeLogActionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReportChangeLogActionFilterObjectSchema).optional()
}).strict();
export const EnumReportChangeLogActionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumReportChangeLogActionWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReportChangeLogActionWithAggregatesFilter>;
export const EnumReportChangeLogActionWithAggregatesFilterObjectZodSchema = makeSchema();
