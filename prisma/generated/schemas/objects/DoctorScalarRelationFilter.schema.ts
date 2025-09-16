import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorScalarRelationFilterObjectSchema: z.ZodType<Prisma.DoctorScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorScalarRelationFilter>;
export const DoctorScalarRelationFilterObjectZodSchema = makeSchema();
