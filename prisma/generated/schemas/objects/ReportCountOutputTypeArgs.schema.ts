import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCountOutputTypeSelectObjectSchema } from './ReportCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReportCountOutputTypeArgsObjectSchema = makeSchema();
export const ReportCountOutputTypeArgsObjectZodSchema = makeSchema();
