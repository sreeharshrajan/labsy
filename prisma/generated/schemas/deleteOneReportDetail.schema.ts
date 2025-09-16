import { z } from 'zod';
import { ReportDetailSelectObjectSchema } from './objects/ReportDetailSelect.schema';
import { ReportDetailIncludeObjectSchema } from './objects/ReportDetailInclude.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './objects/ReportDetailWhereUniqueInput.schema';

export const ReportDetailDeleteOneSchema = z.object({ select: ReportDetailSelectObjectSchema.optional(), include: ReportDetailIncludeObjectSchema.optional(), where: ReportDetailWhereUniqueInputObjectSchema  })