import { z } from 'zod';
import { ReportDetailCreateManyInputObjectSchema } from './objects/ReportDetailCreateManyInput.schema';

export const ReportDetailCreateManySchema = z.object({ data: z.union([ ReportDetailCreateManyInputObjectSchema, z.array(ReportDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })