import { z } from 'zod';
import { ReportParameterCreateManyInputObjectSchema } from './objects/ReportParameterCreateManyInput.schema';

export const ReportParameterCreateManySchema = z.object({ data: z.union([ ReportParameterCreateManyInputObjectSchema, z.array(ReportParameterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })