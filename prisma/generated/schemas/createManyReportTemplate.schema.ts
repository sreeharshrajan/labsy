import { z } from 'zod';
import { ReportTemplateCreateManyInputObjectSchema } from './objects/ReportTemplateCreateManyInput.schema';

export const ReportTemplateCreateManySchema = z.object({ data: z.union([ ReportTemplateCreateManyInputObjectSchema, z.array(ReportTemplateCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })