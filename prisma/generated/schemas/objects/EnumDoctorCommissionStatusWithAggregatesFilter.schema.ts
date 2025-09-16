import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { NestedEnumDoctorCommissionStatusWithAggregatesFilterObjectSchema } from './NestedEnumDoctorCommissionStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDoctorCommissionStatusFilterObjectSchema } from './NestedEnumDoctorCommissionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DoctorCommissionStatusSchema.optional(),
  in: DoctorCommissionStatusSchema.array().optional(),
  notIn: DoctorCommissionStatusSchema.array().optional(),
  not: z.union([DoctorCommissionStatusSchema, z.lazy(() => NestedEnumDoctorCommissionStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDoctorCommissionStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDoctorCommissionStatusFilterObjectSchema).optional()
}).strict();
export const EnumDoctorCommissionStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDoctorCommissionStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDoctorCommissionStatusWithAggregatesFilter>;
export const EnumDoctorCommissionStatusWithAggregatesFilterObjectZodSchema = makeSchema();
