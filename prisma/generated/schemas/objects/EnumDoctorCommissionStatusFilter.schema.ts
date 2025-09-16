import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema';
import { NestedEnumDoctorCommissionStatusFilterObjectSchema } from './NestedEnumDoctorCommissionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DoctorCommissionStatusSchema.optional(),
  in: DoctorCommissionStatusSchema.array().optional(),
  notIn: DoctorCommissionStatusSchema.array().optional(),
  not: z.union([DoctorCommissionStatusSchema, z.lazy(() => NestedEnumDoctorCommissionStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumDoctorCommissionStatusFilterObjectSchema: z.ZodType<Prisma.EnumDoctorCommissionStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDoctorCommissionStatusFilter>;
export const EnumDoctorCommissionStatusFilterObjectZodSchema = makeSchema();
