import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomerCountOrderByAggregateInputObjectSchema } from './CustomerCountOrderByAggregateInput.schema';
import { CustomerMaxOrderByAggregateInputObjectSchema } from './CustomerMaxOrderByAggregateInput.schema';
import { CustomerMinOrderByAggregateInputObjectSchema } from './CustomerMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateOfBirth: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bloodGroup: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  maritalStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aadharNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  panNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  passportNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  knownAllergies: SortOrderSchema.optional(),
  chronicConditions: SortOrderSchema.optional(),
  medications: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  _count: z.lazy(() => CustomerCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CustomerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CustomerMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CustomerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerOrderByWithAggregationInput>;
export const CustomerOrderByWithAggregationInputObjectZodSchema = makeSchema();
