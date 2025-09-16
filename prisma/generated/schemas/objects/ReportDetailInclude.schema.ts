import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportArgsObjectSchema } from './ReportArgs.schema';
import { ReportParameterArgsObjectSchema } from './ReportParameterArgs.schema';
import { ServiceArgsObjectSchema } from './ServiceArgs.schema';
import { ReportTemplateArgsObjectSchema } from './ReportTemplateArgs.schema';
import { DoctorCommissionLogFindManySchema } from '../findManyDoctorCommissionLog.schema';
import { ReportDetailCountOutputTypeArgsObjectSchema } from './ReportDetailCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  parameter: z.union([z.boolean(), z.lazy(() => ReportParameterArgsObjectSchema)]).optional(),
  Service: z.union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)]).optional(),
  ReportTemplate: z.union([z.boolean(), z.lazy(() => ReportTemplateArgsObjectSchema)]).optional(),
  DoctorCommissionLog: z.union([z.boolean(), z.lazy(() => DoctorCommissionLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportDetailCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportDetailIncludeObjectSchema: z.ZodType<Prisma.ReportDetailInclude> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailInclude>;
export const ReportDetailIncludeObjectZodSchema = makeSchema();
