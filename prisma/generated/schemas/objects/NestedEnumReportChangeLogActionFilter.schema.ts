import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogActionSchema } from '../enums/ReportChangeLogAction.schema'

const nestedenumreportchangelogactionfilterSchema = z.object({
  equals: ReportChangeLogActionSchema.optional(),
  in: ReportChangeLogActionSchema.array().optional(),
  notIn: ReportChangeLogActionSchema.array().optional(),
  not: z.union([ReportChangeLogActionSchema, z.lazy(() => NestedEnumReportChangeLogActionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumReportChangeLogActionFilterObjectSchema: z.ZodType<Prisma.NestedEnumReportChangeLogActionFilter> = nestedenumreportchangelogactionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReportChangeLogActionFilter>;
export const NestedEnumReportChangeLogActionFilterObjectZodSchema = nestedenumreportchangelogactionfilterSchema;
