import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  unit: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  turnaroundTime: SortOrderSchema.optional(),
  isCritical: SortOrderSchema.optional(),
  criticalLow: SortOrderSchema.optional(),
  criticalHigh: SortOrderSchema.optional(),
  genderSpecific: SortOrderSchema.optional(),
  ageSpecific: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  referenceMin: SortOrderSchema.optional(),
  referenceMax: SortOrderSchema.optional(),
  gender: SortOrderSchema.optional(),
  ageMin: SortOrderSchema.optional(),
  ageMax: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  templateId: SortOrderSchema.optional()
}).strict();
export const ReportParameterCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportParameterCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCountOrderByAggregateInput>;
export const ReportParameterCountOrderByAggregateInputObjectZodSchema = makeSchema();
