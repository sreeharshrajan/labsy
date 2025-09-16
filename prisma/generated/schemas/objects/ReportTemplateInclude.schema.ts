import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { ServiceArgsObjectSchema } from './ServiceArgs.schema';
import { ReportDetailFindManySchema } from '../findManyReportDetail.schema';
import { ReportParameterFindManySchema } from '../findManyReportParameter.schema';
import { ReportTemplateCountOutputTypeArgsObjectSchema } from './ReportTemplateCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  service: z.union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)]).optional(),
  ReportDetails: z.union([z.boolean(), z.lazy(() => ReportDetailFindManySchema)]).optional(),
  ReportParameter: z.union([z.boolean(), z.lazy(() => ReportParameterFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportTemplateCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportTemplateIncludeObjectSchema: z.ZodType<Prisma.ReportTemplateInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateInclude>;
export const ReportTemplateIncludeObjectZodSchema = makeSchema();
