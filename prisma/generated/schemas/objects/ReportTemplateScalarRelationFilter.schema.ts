import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional()
}).strict();
export const ReportTemplateScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportTemplateScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateScalarRelationFilter>;
export const ReportTemplateScalarRelationFilterObjectZodSchema = makeSchema();
