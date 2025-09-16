import { z } from 'zod';
import { ReportDetailSelectObjectSchema } from './objects/ReportDetailSelect.schema';
import { ReportDetailIncludeObjectSchema } from './objects/ReportDetailInclude.schema';
import { ReportDetailUpdateInputObjectSchema } from './objects/ReportDetailUpdateInput.schema';
import { ReportDetailUncheckedUpdateInputObjectSchema } from './objects/ReportDetailUncheckedUpdateInput.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './objects/ReportDetailWhereUniqueInput.schema';

export const ReportDetailUpdateOneSchema = z.object({ select: ReportDetailSelectObjectSchema.optional(), include: ReportDetailIncludeObjectSchema.optional(), data: z.union([ReportDetailUpdateInputObjectSchema, ReportDetailUncheckedUpdateInputObjectSchema]), where: ReportDetailWhereUniqueInputObjectSchema  })