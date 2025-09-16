import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportStatusSchema } from '../enums/ReportStatus.schema';
import { NestedEnumReportStatusFilterObjectSchema } from './NestedEnumReportStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ReportStatusSchema.optional(),
  in: ReportStatusSchema.array().optional(),
  notIn: ReportStatusSchema.array().optional(),
  not: z.union([ReportStatusSchema, z.lazy(() => NestedEnumReportStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumReportStatusFilterObjectSchema: z.ZodType<Prisma.EnumReportStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReportStatusFilter>;
export const EnumReportStatusFilterObjectZodSchema = makeSchema();
