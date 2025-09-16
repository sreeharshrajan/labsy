import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportOrderByWithRelationInputObjectSchema } from './ReportOrderByWithRelationInput.schema';
import { ReportParameterOrderByWithRelationInputObjectSchema } from './ReportParameterOrderByWithRelationInput.schema';
import { ServiceOrderByWithRelationInputObjectSchema } from './ServiceOrderByWithRelationInput.schema';
import { ReportTemplateOrderByWithRelationInputObjectSchema } from './ReportTemplateOrderByWithRelationInput.schema';
import { DoctorCommissionLogOrderByRelationAggregateInputObjectSchema } from './DoctorCommissionLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  parameterName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parameterUnit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parameterReferenceMin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parameterReferenceMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resultText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resultValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  lastEditedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportId: SortOrderSchema.optional(),
  parameterId: SortOrderSchema.optional(),
  serviceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reportTemplateId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputObjectSchema).optional(),
  parameter: z.lazy(() => ReportParameterOrderByWithRelationInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceOrderByWithRelationInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateOrderByWithRelationInputObjectSchema).optional(),
  DoctorCommissionLog: z.lazy(() => DoctorCommissionLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ReportDetailOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportDetailOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailOrderByWithRelationInput>;
export const ReportDetailOrderByWithRelationInputObjectZodSchema = makeSchema();
