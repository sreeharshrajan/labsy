import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogSelectObjectSchema } from './DoctorCommissionLogSelect.schema';
import { DoctorCommissionLogIncludeObjectSchema } from './DoctorCommissionLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorCommissionLogSelectObjectSchema).optional(),
  include: z.lazy(() => DoctorCommissionLogIncludeObjectSchema).optional()
}).strict();
export const DoctorCommissionLogArgsObjectSchema = makeSchema();
export const DoctorCommissionLogArgsObjectZodSchema = makeSchema();
