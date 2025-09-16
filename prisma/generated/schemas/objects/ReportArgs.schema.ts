import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportSelectObjectSchema } from './ReportSelect.schema';
import { ReportIncludeObjectSchema } from './ReportInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportSelectObjectSchema).optional(),
  include: z.lazy(() => ReportIncludeObjectSchema).optional()
}).strict();
export const ReportArgsObjectSchema = makeSchema();
export const ReportArgsObjectZodSchema = makeSchema();
