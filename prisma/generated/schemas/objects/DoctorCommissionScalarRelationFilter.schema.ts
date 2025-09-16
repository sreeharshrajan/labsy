import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionWhereInputObjectSchema } from './DoctorCommissionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DoctorCommissionWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DoctorCommissionWhereInputObjectSchema).optional()
}).strict();
export const DoctorCommissionScalarRelationFilterObjectSchema: z.ZodType<Prisma.DoctorCommissionScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionScalarRelationFilter>;
export const DoctorCommissionScalarRelationFilterObjectZodSchema = makeSchema();
