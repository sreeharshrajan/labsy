import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportStatusSchema } from '../enums/ReportStatus.schema'

const nestedenumreportstatusfilterSchema = z.object({
  equals: ReportStatusSchema.optional(),
  in: ReportStatusSchema.array().optional(),
  notIn: ReportStatusSchema.array().optional(),
  not: z.union([ReportStatusSchema, z.lazy(() => NestedEnumReportStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumReportStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumReportStatusFilter> = nestedenumreportstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReportStatusFilter>;
export const NestedEnumReportStatusFilterObjectZodSchema = nestedenumreportstatusfilterSchema;
