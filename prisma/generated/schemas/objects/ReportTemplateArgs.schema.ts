import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateSelectObjectSchema } from './ReportTemplateSelect.schema';
import { ReportTemplateIncludeObjectSchema } from './ReportTemplateInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportTemplateSelectObjectSchema).optional(),
  include: z.lazy(() => ReportTemplateIncludeObjectSchema).optional()
}).strict();
export const ReportTemplateArgsObjectSchema = makeSchema();
export const ReportTemplateArgsObjectZodSchema = makeSchema();
