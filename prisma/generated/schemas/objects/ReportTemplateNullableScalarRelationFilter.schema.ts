import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereInputObjectSchema } from './ReportTemplateWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ReportTemplateWhereInputObjectSchema).optional().nullable()
}).strict();
export const ReportTemplateNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportTemplateNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateNullableScalarRelationFilter>;
export const ReportTemplateNullableScalarRelationFilterObjectZodSchema = makeSchema();
