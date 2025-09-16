import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCountOutputTypeSelectObjectSchema } from './ReportDetailCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportDetailCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReportDetailCountOutputTypeArgsObjectSchema = makeSchema();
export const ReportDetailCountOutputTypeArgsObjectZodSchema = makeSchema();
