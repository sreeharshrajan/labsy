import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportTemplateOrderByWithRelationInputObjectSchema } from './ReportTemplateOrderByWithRelationInput.schema';
import { ReportDetailOrderByRelationAggregateInputObjectSchema } from './ReportDetailOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  unit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  method: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  turnaroundTime: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isCritical: SortOrderSchema.optional(),
  criticalLow: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  criticalHigh: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  genderSpecific: SortOrderSchema.optional(),
  ageSpecific: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceMin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  referenceMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ageMin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ageMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  templateId: SortOrderSchema.optional(),
  template: z.lazy(() => ReportTemplateOrderByWithRelationInputObjectSchema).optional(),
  details: z.lazy(() => ReportDetailOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ReportParameterOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportParameterOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterOrderByWithRelationInput>;
export const ReportParameterOrderByWithRelationInputObjectZodSchema = makeSchema();
