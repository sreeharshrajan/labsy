import { z } from 'zod';
import { ReportTemplateSelectObjectSchema } from './objects/ReportTemplateSelect.schema';
import { ReportTemplateCreateManyInputObjectSchema } from './objects/ReportTemplateCreateManyInput.schema';

export const ReportTemplateCreateManyAndReturnSchema = z.object({ select: ReportTemplateSelectObjectSchema.optional(), data: z.union([ ReportTemplateCreateManyInputObjectSchema, z.array(ReportTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()