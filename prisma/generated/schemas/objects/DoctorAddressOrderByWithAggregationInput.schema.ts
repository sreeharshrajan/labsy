import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorAddressCountOrderByAggregateInputObjectSchema } from './DoctorAddressCountOrderByAggregateInput.schema';
import { DoctorAddressMaxOrderByAggregateInputObjectSchema } from './DoctorAddressMaxOrderByAggregateInput.schema';
import { DoctorAddressMinOrderByAggregateInputObjectSchema } from './DoctorAddressMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => DoctorAddressCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DoctorAddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DoctorAddressMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DoctorAddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DoctorAddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressOrderByWithAggregationInput>;
export const DoctorAddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
