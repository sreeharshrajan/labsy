import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCountOutputTypeSelectObjectSchema } from './DoctorCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DoctorCountOutputTypeArgsObjectSchema = makeSchema();
export const DoctorCountOutputTypeArgsObjectZodSchema = makeSchema();
