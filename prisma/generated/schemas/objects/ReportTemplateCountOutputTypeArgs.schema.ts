import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCountOutputTypeSelectObjectSchema } from './ReportTemplateCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReportTemplateCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ReportTemplateCountOutputTypeArgsObjectSchema = makeSchema();
export const ReportTemplateCountOutputTypeArgsObjectZodSchema = makeSchema();
