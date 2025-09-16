import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorCommissionPaymentCountOrderByAggregateInputObjectSchema } from './DoctorCommissionPaymentCountOrderByAggregateInput.schema';
import { DoctorCommissionPaymentAvgOrderByAggregateInputObjectSchema } from './DoctorCommissionPaymentAvgOrderByAggregateInput.schema';
import { DoctorCommissionPaymentMaxOrderByAggregateInputObjectSchema } from './DoctorCommissionPaymentMaxOrderByAggregateInput.schema';
import { DoctorCommissionPaymentMinOrderByAggregateInputObjectSchema } from './DoctorCommissionPaymentMinOrderByAggregateInput.schema';
import { DoctorCommissionPaymentSumOrderByAggregateInputObjectSchema } from './DoctorCommissionPaymentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  paymentDate: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  referenceNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  doctorId: SortOrderSchema.optional(),
  _count: z.lazy(() => DoctorCommissionPaymentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DoctorCommissionPaymentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DoctorCommissionPaymentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DoctorCommissionPaymentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DoctorCommissionPaymentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DoctorCommissionPaymentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentOrderByWithAggregationInput>;
export const DoctorCommissionPaymentOrderByWithAggregationInputObjectZodSchema = makeSchema();
