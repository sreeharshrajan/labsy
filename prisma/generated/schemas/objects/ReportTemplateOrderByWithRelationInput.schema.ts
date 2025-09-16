import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { ServiceOrderByWithRelationInputObjectSchema } from './ServiceOrderByWithRelationInput.schema';
import { ReportDetailOrderByRelationAggregateInputObjectSchema } from './ReportDetailOrderByRelationAggregateInput.schema';
import { ReportParameterOrderByRelationAggregateInputObjectSchema } from './ReportParameterOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  unit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  serviceId: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  service: z.lazy(() => ServiceOrderByWithRelationInputObjectSchema).optional(),
  ReportDetails: z.lazy(() => ReportDetailOrderByRelationAggregateInputObjectSchema).optional(),
  ReportParameter: z.lazy(() => ReportParameterOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ReportTemplateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReportTemplateOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateOrderByWithRelationInput>;
export const ReportTemplateOrderByWithRelationInputObjectZodSchema = makeSchema();
