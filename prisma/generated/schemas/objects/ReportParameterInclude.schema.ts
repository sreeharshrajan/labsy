import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateArgsObjectSchema } from './ReportTemplateArgs.schema';
import { ReportDetailFindManySchema } from '../findManyReportDetail.schema';
import { ReportParameterCountOutputTypeArgsObjectSchema } from './ReportParameterCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  template: z.union([z.boolean(), z.lazy(() => ReportTemplateArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => ReportDetailFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportParameterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportParameterIncludeObjectSchema: z.ZodType<Prisma.ReportParameterInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterInclude>;
export const ReportParameterIncludeObjectZodSchema = makeSchema();
