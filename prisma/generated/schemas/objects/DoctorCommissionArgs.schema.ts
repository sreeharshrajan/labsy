import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionSelectObjectSchema } from './DoctorCommissionSelect.schema';
import { DoctorCommissionIncludeObjectSchema } from './DoctorCommissionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorCommissionSelectObjectSchema).optional(),
  include: z.lazy(() => DoctorCommissionIncludeObjectSchema).optional()
}).strict();
export const DoctorCommissionArgsObjectSchema = makeSchema();
export const DoctorCommissionArgsObjectZodSchema = makeSchema();
