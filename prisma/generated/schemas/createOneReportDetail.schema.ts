import { z } from 'zod';
import { ReportDetailSelectObjectSchema } from './objects/ReportDetailSelect.schema';
import { ReportDetailIncludeObjectSchema } from './objects/ReportDetailInclude.schema';
import { ReportDetailCreateInputObjectSchema } from './objects/ReportDetailCreateInput.schema';
import { ReportDetailUncheckedCreateInputObjectSchema } from './objects/ReportDetailUncheckedCreateInput.schema';

export const ReportDetailCreateOneSchema = z.object({ select: ReportDetailSelectObjectSchema.optional(), include: ReportDetailIncludeObjectSchema.optional(), data: z.union([ReportDetailCreateInputObjectSchema, ReportDetailUncheckedCreateInputObjectSchema])  })