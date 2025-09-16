import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogWhereInputObjectSchema } from './DoctorCommissionLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DoctorCommissionLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => DoctorCommissionLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => DoctorCommissionLogWhereInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogListRelationFilterObjectSchema: z.ZodType<Prisma.DoctorCommissionLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogListRelationFilter>;
export const DoctorCommissionLogListRelationFilterObjectZodSchema = makeSchema();
