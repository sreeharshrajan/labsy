import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailSelectObjectSchema } from './ReportDetailSelect.schema';
import { ReportDetailIncludeObjectSchema } from './ReportDetailInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportDetailSelectObjectSchema).optional(),
  include: z.lazy(() => ReportDetailIncludeObjectSchema).optional()
}).strict();
export const ReportDetailArgsObjectSchema = makeSchema();
export const ReportDetailArgsObjectZodSchema = makeSchema();
