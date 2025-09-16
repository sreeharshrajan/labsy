import { z } from 'zod';
import { ReportTemplateUpdateManyMutationInputObjectSchema } from './objects/ReportTemplateUpdateManyMutationInput.schema';
import { ReportTemplateWhereInputObjectSchema } from './objects/ReportTemplateWhereInput.schema';

export const ReportTemplateUpdateManySchema = z.object({ data: ReportTemplateUpdateManyMutationInputObjectSchema, where: ReportTemplateWhereInputObjectSchema.optional()  })