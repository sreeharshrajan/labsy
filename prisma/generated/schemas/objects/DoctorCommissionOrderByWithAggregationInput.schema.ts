import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorCommissionCountOrderByAggregateInputObjectSchema } from './DoctorCommissionCountOrderByAggregateInput.schema';
import { DoctorCommissionAvgOrderByAggregateInputObjectSchema } from './DoctorCommissionAvgOrderByAggregateInput.schema';
import { DoctorCommissionMaxOrderByAggregateInputObjectSchema } from './DoctorCommissionMaxOrderByAggregateInput.schema';
import { DoctorCommissionMinOrderByAggregateInputObjectSchema } from './DoctorCommissionMinOrderByAggregateInput.schema';
import { DoctorCommissionSumOrderByAggregateInputObjectSchema } from './DoctorCommissionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  commissionType: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  doctorId: SortOrderSchema.optional(),
  _count: z.lazy(() => DoctorCommissionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DoctorCommissionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DoctorCommissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DoctorCommissionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DoctorCommissionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DoctorCommissionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DoctorCommissionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionOrderByWithAggregationInput>;
export const DoctorCommissionOrderByWithAggregationInputObjectZodSchema = makeSchema();
