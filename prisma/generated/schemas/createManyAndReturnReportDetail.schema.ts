import { z } from 'zod';
import { ReportDetailSelectObjectSchema } from './objects/ReportDetailSelect.schema';
import { ReportDetailCreateManyInputObjectSchema } from './objects/ReportDetailCreateManyInput.schema';

export const ReportDetailCreateManyAndReturnSchema = z.object({ select: ReportDetailSelectObjectSchema.optional(), data: z.union([ ReportDetailCreateManyInputObjectSchema, z.array(ReportDetailCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()