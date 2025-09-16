import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  unit: z.literal(true).optional(),
  method: z.literal(true).optional(),
  turnaroundTime: z.literal(true).optional(),
  isCritical: z.literal(true).optional(),
  criticalLow: z.literal(true).optional(),
  criticalHigh: z.literal(true).optional(),
  genderSpecific: z.literal(true).optional(),
  ageSpecific: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  referenceMin: z.literal(true).optional(),
  referenceMax: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  ageMin: z.literal(true).optional(),
  ageMax: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional(),
  templateId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ReportParameterCountAggregateInputObjectSchema: z.ZodType<Prisma.ReportParameterCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCountAggregateInputType>;
export const ReportParameterCountAggregateInputObjectZodSchema = makeSchema();
