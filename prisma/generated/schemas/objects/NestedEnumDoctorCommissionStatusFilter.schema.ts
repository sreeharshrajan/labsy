import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema'

const nestedenumdoctorcommissionstatusfilterSchema = z.object({
  equals: DoctorCommissionStatusSchema.optional(),
  in: DoctorCommissionStatusSchema.array().optional(),
  notIn: DoctorCommissionStatusSchema.array().optional(),
  not: z.union([DoctorCommissionStatusSchema, z.lazy(() => NestedEnumDoctorCommissionStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDoctorCommissionStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumDoctorCommissionStatusFilter> = nestedenumdoctorcommissionstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDoctorCommissionStatusFilter>;
export const NestedEnumDoctorCommissionStatusFilterObjectZodSchema = nestedenumdoctorcommissionstatusfilterSchema;
