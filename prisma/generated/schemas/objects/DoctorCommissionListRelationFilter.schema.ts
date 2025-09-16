import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionWhereInputObjectSchema } from './DoctorCommissionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DoctorCommissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => DoctorCommissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => DoctorCommissionWhereInputObjectSchema).optional()
}).strict();
export const DoctorCommissionListRelationFilterObjectSchema: z.ZodType<Prisma.DoctorCommissionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionListRelationFilter>;
export const DoctorCommissionListRelationFilterObjectZodSchema = makeSchema();
