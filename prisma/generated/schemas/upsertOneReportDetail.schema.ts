import { z } from 'zod';
import { ReportDetailSelectObjectSchema } from './objects/ReportDetailSelect.schema';
import { ReportDetailIncludeObjectSchema } from './objects/ReportDetailInclude.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './objects/ReportDetailWhereUniqueInput.schema';
import { ReportDetailCreateInputObjectSchema } from './objects/ReportDetailCreateInput.schema';
import { ReportDetailUncheckedCreateInputObjectSchema } from './objects/ReportDetailUncheckedCreateInput.schema';
import { ReportDetailUpdateInputObjectSchema } from './objects/ReportDetailUpdateInput.schema';
import { ReportDetailUncheckedUpdateInputObjectSchema } from './objects/ReportDetailUncheckedUpdateInput.schema';

export const ReportDetailUpsertSchema = z.object({ select: ReportDetailSelectObjectSchema.optional(), include: ReportDetailIncludeObjectSchema.optional(), where: ReportDetailWhereUniqueInputObjectSchema, create: z.union([ ReportDetailCreateInputObjectSchema, ReportDetailUncheckedCreateInputObjectSchema ]), update: z.union([ ReportDetailUpdateInputObjectSchema, ReportDetailUncheckedUpdateInputObjectSchema ])  })