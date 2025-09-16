import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorCommissionLogCountOrderByAggregateInputObjectSchema } from './DoctorCommissionLogCountOrderByAggregateInput.schema';
import { DoctorCommissionLogAvgOrderByAggregateInputObjectSchema } from './DoctorCommissionLogAvgOrderByAggregateInput.schema';
import { DoctorCommissionLogMaxOrderByAggregateInputObjectSchema } from './DoctorCommissionLogMaxOrderByAggregateInput.schema';
import { DoctorCommissionLogMinOrderByAggregateInputObjectSchema } from './DoctorCommissionLogMinOrderByAggregateInput.schema';
import { DoctorCommissionLogSumOrderByAggregateInputObjectSchema } from './DoctorCommissionLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  invoiceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionId: SortOrderSchema.optional(),
  reportDetailId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionAmt: SortOrderSchema.optional(),
  commissionStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DoctorCommissionLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DoctorCommissionLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DoctorCommissionLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DoctorCommissionLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DoctorCommissionLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogOrderByWithAggregationInput>;
export const DoctorCommissionLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
