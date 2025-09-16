import { z } from 'zod';
import { ReportParameterSelectObjectSchema } from './objects/ReportParameterSelect.schema';
import { ReportParameterCreateManyInputObjectSchema } from './objects/ReportParameterCreateManyInput.schema';

export const ReportParameterCreateManyAndReturnSchema = z.object({ select: ReportParameterSelectObjectSchema.optional(), data: z.union([ ReportParameterCreateManyInputObjectSchema, z.array(ReportParameterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()