import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional()
}).strict();
export const ReportTemplateListRelationFilterObjectSchema: z.ZodType<Prisma.ReportTemplateListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateListRelationFilter>;
export const ReportTemplateListRelationFilterObjectZodSchema = makeSchema();
