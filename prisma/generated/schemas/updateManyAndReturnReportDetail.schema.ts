import { z } from 'zod';
import { ReportDetailSelectObjectSchema } from './objects/ReportDetailSelect.schema';
import { ReportDetailUpdateManyMutationInputObjectSchema } from './objects/ReportDetailUpdateManyMutationInput.schema';
import { ReportDetailWhereInputObjectSchema } from './objects/ReportDetailWhereInput.schema';

export const ReportDetailUpdateManyAndReturnSchema = z.object({ select: ReportDetailSelectObjectSchema.optional(), data: ReportDetailUpdateManyMutationInputObjectSchema, where: ReportDetailWhereInputObjectSchema.optional()  }).strict()