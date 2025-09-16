import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportArgsObjectSchema } from './ReportArgs.schema';
import { ReportParameterArgsObjectSchema } from './ReportParameterArgs.schema';
import { ServiceArgsObjectSchema } from './ServiceArgs.schema';
import { ReportTemplateArgsObjectSchema } from './ReportTemplateArgs.schema';
import { DoctorCommissionLogFindManySchema } from '../findManyDoctorCommissionLog.schema';
import { ReportDetailCountOutputTypeArgsObjectSchema } from './ReportDetailCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  parameterName: z.boolean().optional(),
  parameterUnit: z.boolean().optional(),
  parameterReferenceMin: z.boolean().optional(),
  parameterReferenceMax: z.boolean().optional(),
  resultText: z.boolean().optional(),
  resultValue: z.boolean().optional(),
  remarks: z.boolean().optional(),
  amount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastEditedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  reportId: z.boolean().optional(),
  parameterId: z.boolean().optional(),
  report: z.union([z.boolean(), z.lazy(() => ReportArgsObjectSchema)]).optional(),
  parameter: z.union([z.boolean(), z.lazy(() => ReportParameterArgsObjectSchema)]).optional(),
  serviceId: z.boolean().optional(),
  Service: z.union([z.boolean(), z.lazy(() => ServiceArgsObjectSchema)]).optional(),
  reportTemplateId: z.boolean().optional(),
  ReportTemplate: z.union([z.boolean(), z.lazy(() => ReportTemplateArgsObjectSchema)]).optional(),
  DoctorCommissionLog: z.union([z.boolean(), z.lazy(() => DoctorCommissionLogFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportDetailCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportDetailSelectObjectSchema: z.ZodType<Prisma.ReportDetailSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailSelect>;
export const ReportDetailSelectObjectZodSchema = makeSchema();
