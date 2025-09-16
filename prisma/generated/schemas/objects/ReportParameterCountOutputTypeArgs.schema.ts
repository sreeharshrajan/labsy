import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterCountOutputTypeSelectObjectSchema } from './ReportParameterCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportParameterCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReportParameterCountOutputTypeArgsObjectSchema = makeSchema();
export const ReportParameterCountOutputTypeArgsObjectZodSchema = makeSchema();
