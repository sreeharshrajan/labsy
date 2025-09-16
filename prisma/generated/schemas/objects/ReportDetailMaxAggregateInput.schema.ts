import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  parameterName: z.literal(true).optional(),
  parameterUnit: z.literal(true).optional(),
  parameterReferenceMin: z.literal(true).optional(),
  parameterReferenceMax: z.literal(true).optional(),
  resultText: z.literal(true).optional(),
  resultValue: z.literal(true).optional(),
  remarks: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  lastEditedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  reportId: z.literal(true).optional(),
  parameterId: z.literal(true).optional(),
  serviceId: z.literal(true).optional(),
  reportTemplateId: z.literal(true).optional()
}).strict();
export const ReportDetailMaxAggregateInputObjectSchema: z.ZodType<Prisma.ReportDetailMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailMaxAggregateInputType>;
export const ReportDetailMaxAggregateInputObjectZodSchema = makeSchema();
