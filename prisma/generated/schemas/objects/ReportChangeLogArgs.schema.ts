import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogSelectObjectSchema } from './ReportChangeLogSelect.schema';
import { ReportChangeLogIncludeObjectSchema } from './ReportChangeLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportChangeLogSelectObjectSchema).optional(),
  include: z.lazy(() => ReportChangeLogIncludeObjectSchema).optional()
}).strict();
export const ReportChangeLogArgsObjectSchema = makeSchema();
export const ReportChangeLogArgsObjectZodSchema = makeSchema();
