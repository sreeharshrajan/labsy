import { z } from 'zod';
import { ReportTemplateSelectObjectSchema } from './objects/ReportTemplateSelect.schema';
import { ReportTemplateUpdateManyMutationInputObjectSchema } from './objects/ReportTemplateUpdateManyMutationInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './objects/ReportTemplateWhereInput.schema';

export const ReportTemplateUpdateManyAndReturnSchema = z.object({ select: ReportTemplateSelectObjectSchema.optional(), data: ReportTemplateUpdateManyMutationInputObjectSchema, where: ReportTemplateWhereInputObjectSchema.optional()  }).strict()