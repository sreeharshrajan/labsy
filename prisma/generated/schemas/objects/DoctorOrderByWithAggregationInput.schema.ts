import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorCountOrderByAggregateInputObjectSchema } from './DoctorCountOrderByAggregateInput.schema';
import { DoctorMaxOrderByAggregateInputObjectSchema } from './DoctorMaxOrderByAggregateInput.schema';
import { DoctorMinOrderByAggregateInputObjectSchema } from './DoctorMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  specialization: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  registrationNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clinicName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  department: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  _count: z.lazy(() => DoctorCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DoctorMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DoctorMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DoctorOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DoctorOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorOrderByWithAggregationInput>;
export const DoctorOrderByWithAggregationInputObjectZodSchema = makeSchema();
