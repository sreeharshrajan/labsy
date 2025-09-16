import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportCountOrderByAggregateInputObjectSchema } from './ReportCountOrderByAggregateInput.schema';
import { ReportAvgOrderByAggregateInputObjectSchema } from './ReportAvgOrderByAggregateInput.schema';
import { ReportMaxOrderByAggregateInputObjectSchema } from './ReportMaxOrderByAggregateInput.schema';
import { ReportMinOrderByAggregateInputObjectSchema } from './ReportMinOrderByAggregateInput.schema';
import { ReportSumOrderByAggregateInputObjectSchema } from './ReportSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  reportCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collectedPlace: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  customerType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  issuedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collectedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  customerId: SortOrderSchema.optional(),
  doctorId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  invoiceId: SortOrderSchema.optional(),
  createdBy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collectedBy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  customerAddressId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  labAddressId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReportAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReportSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByWithAggregationInput>;
export const ReportOrderByWithAggregationInputObjectZodSchema = makeSchema();
