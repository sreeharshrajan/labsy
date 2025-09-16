import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DoctorWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DoctorWhereInputObjectSchema).optional().nullable()
}).strict();
export const DoctorNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DoctorNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorNullableScalarRelationFilter>;
export const DoctorNullableScalarRelationFilterObjectZodSchema = makeSchema();
