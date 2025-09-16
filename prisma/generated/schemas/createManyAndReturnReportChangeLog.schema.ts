import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogCreateManyInputObjectSchema } from './objects/ReportChangeLogCreateManyInput.schema';

export const ReportChangeLogCreateManyAndReturnSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), data: z.union([ ReportChangeLogCreateManyInputObjectSchema, z.array(ReportChangeLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()