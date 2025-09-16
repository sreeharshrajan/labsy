import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorSelectObjectSchema } from './DoctorSelect.schema';
import { DoctorIncludeObjectSchema } from './DoctorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorSelectObjectSchema).optional(),
  include: z.lazy(() => DoctorIncludeObjectSchema).optional()
}).strict();
export const DoctorArgsObjectSchema = makeSchema();
export const DoctorArgsObjectZodSchema = makeSchema();
