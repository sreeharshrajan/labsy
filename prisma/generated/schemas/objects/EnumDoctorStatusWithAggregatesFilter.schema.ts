import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { NestedEnumDoctorStatusWithAggregatesFilterObjectSchema } from './NestedEnumDoctorStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDoctorStatusFilterObjectSchema } from './NestedEnumDoctorStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DoctorStatusSchema.optional(),
  in: DoctorStatusSchema.array().optional(),
  notIn: DoctorStatusSchema.array().optional(),
  not: z.union([DoctorStatusSchema, z.lazy(() => NestedEnumDoctorStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDoctorStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDoctorStatusFilterObjectSchema).optional()
}).strict();
export const EnumDoctorStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDoctorStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDoctorStatusWithAggregatesFilter>;
export const EnumDoctorStatusWithAggregatesFilterObjectZodSchema = makeSchema();
