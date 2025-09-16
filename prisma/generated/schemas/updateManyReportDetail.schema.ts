import { z } from 'zod';
import { ReportDetailUpdateManyMutationInputObjectSchema } from './objects/ReportDetailUpdateManyMutationInput.schema';
import { ReportDetailWhereInputObjectSchema } from './objects/ReportDetailWhereInput.schema';

export const ReportDetailUpdateManySchema = z.object({ data: ReportDetailUpdateManyMutationInputObjectSchema, where: ReportDetailWhereInputObjectSchema.optional()  })