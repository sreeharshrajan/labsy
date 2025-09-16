import { z } from 'zod';
import { ReportTemplateWhereInputObjectSchema } from './objects/ReportTemplateWhereInput.schema';

export const ReportTemplateDeleteManySchema = z.object({ where: ReportTemplateWhereInputObjectSchema.optional()  })