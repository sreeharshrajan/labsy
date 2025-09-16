import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  some: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  none: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorListRelationFilterObjectSchema: z.ZodType<Prisma.DoctorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorListRelationFilter>;
export const DoctorListRelationFilterObjectZodSchema = makeSchema();
