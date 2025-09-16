import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema';
import { NestedEnumReportChangeLogActionFilterObjectSchema } from './NestedEnumReportChangeLogActionFilter.schema'

const makeSchema = () => z.object({
  equals: ReportChangeLogActionSchema.optional(),
  in: ReportChangeLogActionSchema.array().optional(),
  notIn: ReportChangeLogActionSchema.array().optional(),
  not: z.union([ReportChangeLogActionSchema, z.lazy(() => NestedEnumReportChangeLogActionFilterObjectSchema)]).optional()
}).strict();
export const EnumReportChangeLogActionFilterObjectSchema: z.ZodType<Prisma.EnumReportChangeLogActionFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReportChangeLogActionFilter>;
export const EnumReportChangeLogActionFilterObjectZodSchema = makeSchema();
