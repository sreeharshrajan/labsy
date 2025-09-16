import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema'

const nestedenumdoctorstatusfilterSchema = z.object({
  equals: DoctorStatusSchema.optional(),
  in: DoctorStatusSchema.array().optional(),
  notIn: DoctorStatusSchema.array().optional(),
  not: z.union([DoctorStatusSchema, z.lazy(() => NestedEnumDoctorStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDoctorStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumDoctorStatusFilter> = nestedenumdoctorstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDoctorStatusFilter>;
export const NestedEnumDoctorStatusFilterObjectZodSchema = nestedenumdoctorstatusfilterSchema;
