import { z } from 'zod';
import { ReportParameterSelectObjectSchema } from './objects/ReportParameterSelect.schema';
import { ReportParameterIncludeObjectSchema } from './objects/ReportParameterInclude.schema';
import { ReportParameterCreateInputObjectSchema } from './objects/ReportParameterCreateInput.schema';
import { ReportParameterUncheckedCreateInputObjectSchema } from './objects/ReportParameterUncheckedCreateInput.schema';

export const ReportParameterCreateOneSchema = z.object({ select: ReportParameterSelectObjectSchema.optional(), include: ReportParameterIncludeObjectSchema.optional(), data: z.union([ReportParameterCreateInputObjectSchema, ReportParameterUncheckedCreateInputObjectSchema])  })