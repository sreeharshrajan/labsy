import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  parameterName: SortOrderSchema.optional(),
  parameterUnit: SortOrderSchema.optional(),
  parameterReferenceMin: SortOrderSchema.optional(),
  parameterReferenceMax: SortOrderSchema.optional(),
  resultText: SortOrderSchema.optional(),
  resultValue: SortOrderSchema.optional(),
  remarks: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  lastEditedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional(),
  reportId: SortOrderSchema.optional(),
  parameterId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  reportTemplateId: SortOrderSchema.optional()
}).strict();
export const ReportDetailCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReportDetailCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCountOrderByAggregateInput>;
export const ReportDetailCountOrderByAggregateInputObjectZodSchema = makeSchema();
