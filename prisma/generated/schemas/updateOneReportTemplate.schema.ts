import { z } from 'zod';
import { ReportTemplateSelectObjectSchema } from './objects/ReportTemplateSelect.schema';
import { ReportTemplateIncludeObjectSchema } from './objects/ReportTemplateInclude.schema';
import { ReportTemplateUpdateInputObjectSchema } from './objects/ReportTemplateUpdateInput.schema';
import { ReportTemplateUncheckedUpdateInputObjectSchema } from './objects/ReportTemplateUncheckedUpdateInput.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './objects/ReportTemplateWhereUniqueInput.schema';

export const ReportTemplateUpdateOneSchema = z.object({ select: ReportTemplateSelectObjectSchema.optional(), include: ReportTemplateIncludeObjectSchema.optional(), data: z.union([ReportTemplateUpdateInputObjectSchema, ReportTemplateUncheckedUpdateInputObjectSchema]), where: ReportTemplateWhereUniqueInputObjectSchema  })