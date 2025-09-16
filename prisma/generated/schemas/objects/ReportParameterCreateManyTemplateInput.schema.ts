import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GenderSchema } from '../enums/Gender.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  unit: z.string().optional().nullable(),
  method: z.string().optional().nullable(),
  turnaroundTime: z.number().int().optional().nullable(),
  isCritical: z.boolean().optional(),
  criticalLow: z.number().optional().nullable(),
  criticalHigh: z.number().optional().nullable(),
  genderSpecific: z.boolean().optional(),
  ageSpecific: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  referenceMin: z.number().optional().nullable(),
  referenceMax: z.number().optional().nullable(),
  gender: GenderSchema.optional().nullable(),
  ageMin: z.number().int().optional().nullable(),
  ageMax: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const ReportParameterCreateManyTemplateInputObjectSchema: z.ZodType<Prisma.ReportParameterCreateManyTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCreateManyTemplateInput>;
export const ReportParameterCreateManyTemplateInputObjectZodSchema = makeSchema();
