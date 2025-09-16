import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionCountOutputTypeSelectObjectSchema } from './DoctorCommissionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorCommissionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DoctorCommissionCountOutputTypeArgsObjectSchema = makeSchema();
export const DoctorCommissionCountOutputTypeArgsObjectZodSchema = makeSchema();
