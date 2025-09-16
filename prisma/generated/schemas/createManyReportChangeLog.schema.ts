import { z } from 'zod';
import { ReportChangeLogCreateManyInputObjectSchema } from './objects/ReportChangeLogCreateManyInput.schema';

export const ReportChangeLogCreateManySchema = z.object({ data: z.union([ ReportChangeLogCreateManyInputObjectSchema, z.array(ReportChangeLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })