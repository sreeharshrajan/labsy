import { z } from 'zod';
import { ReportTemplateSelectObjectSchema } from './objects/ReportTemplateSelect.schema';
import { ReportTemplateIncludeObjectSchema } from './objects/ReportTemplateInclude.schema';
import { ReportTemplateCreateInputObjectSchema } from './objects/ReportTemplateCreateInput.schema';
import { ReportTemplateUncheckedCreateInputObjectSchema } from './objects/ReportTemplateUncheckedCreateInput.schema';

export const ReportTemplateCreateOneSchema = z.object({ select: ReportTemplateSelectObjectSchema.optional(), include: ReportTemplateIncludeObjectSchema.optional(), data: z.union([ReportTemplateCreateInputObjectSchema, ReportTemplateUncheckedCreateInputObjectSchema])  })