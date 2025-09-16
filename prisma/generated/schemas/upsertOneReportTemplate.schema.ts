import { z } from 'zod';
import { ReportTemplateSelectObjectSchema } from './objects/ReportTemplateSelect.schema';
import { ReportTemplateIncludeObjectSchema } from './objects/ReportTemplateInclude.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './objects/ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateCreateInputObjectSchema } from './objects/ReportTemplateCreateInput.schema';
import { ReportTemplateUncheckedCreateInputObjectSchema } from './objects/ReportTemplateUncheckedCreateInput.schema';
import { ReportTemplateUpdateInputObjectSchema } from './objects/ReportTemplateUpdateInput.schema';
import { ReportTemplateUncheckedUpdateInputObjectSchema } from './objects/ReportTemplateUncheckedUpdateInput.schema';

export const ReportTemplateUpsertSchema = z.object({ select: ReportTemplateSelectObjectSchema.optional(), include: ReportTemplateIncludeObjectSchema.optional(), where: ReportTemplateWhereUniqueInputObjectSchema, create: z.union([ ReportTemplateCreateInputObjectSchema, ReportTemplateUncheckedCreateInputObjectSchema ]), update: z.union([ ReportTemplateUpdateInputObjectSchema, ReportTemplateUncheckedUpdateInputObjectSchema ])  })