import { z } from 'zod';
import { ReportDetailWhereInputObjectSchema } from './objects/ReportDetailWhereInput.schema';

export const ReportDetailDeleteManySchema = z.object({ where: ReportDetailWhereInputObjectSchema.optional()  })