import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateArgsObjectSchema } from './ReportTemplateArgs.schema';
import { ReportDetailFindManySchema } from '../findManyReportDetail.schema';
import { ReportParameterCountOutputTypeArgsObjectSchema } from './ReportParameterCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  unit: z.boolean().optional(),
  method: z.boolean().optional(),
  turnaroundTime: z.boolean().optional(),
  isCritical: z.boolean().optional(),
  criticalLow: z.boolean().optional(),
  criticalHigh: z.boolean().optional(),
  genderSpecific: z.boolean().optional(),
  ageSpecific: z.boolean().optional(),
  notes: z.boolean().optional(),
  referenceMin: z.boolean().optional(),
  referenceMax: z.boolean().optional(),
  gender: z.boolean().optional(),
  ageMin: z.boolean().optional(),
  ageMax: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  templateId: z.boolean().optional(),
  template: z.union([z.boolean(), z.lazy(() => ReportTemplateArgsObjectSchema)]).optional(),
  details: z.union([z.boolean(), z.lazy(() => ReportDetailFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReportParameterCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReportParameterSelectObjectSchema: z.ZodType<Prisma.ReportParameterSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterSelect>;
export const ReportParameterSelectObjectZodSchema = makeSchema();
