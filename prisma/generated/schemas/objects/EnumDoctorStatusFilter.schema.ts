import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema';
import { NestedEnumDoctorStatusFilterObjectSchema } from './NestedEnumDoctorStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DoctorStatusSchema.optional(),
  in: DoctorStatusSchema.array().optional(),
  notIn: DoctorStatusSchema.array().optional(),
  not: z.union([DoctorStatusSchema, z.lazy(() => NestedEnumDoctorStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumDoctorStatusFilterObjectSchema: z.ZodType<Prisma.EnumDoctorStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDoctorStatusFilter>;
export const EnumDoctorStatusFilterObjectZodSchema = makeSchema();
