import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterSelectObjectSchema } from './ReportParameterSelect.schema';
import { ReportParameterIncludeObjectSchema } from './ReportParameterInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportParameterSelectObjectSchema).optional(),
  include: z.lazy(() => ReportParameterIncludeObjectSchema).optional()
}).strict();
export const ReportParameterArgsObjectSchema = makeSchema();
export const ReportParameterArgsObjectZodSchema = makeSchema();
