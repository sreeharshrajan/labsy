import { z } from 'zod';
import { ReportChangeLogWhereInputObjectSchema } from './objects/ReportChangeLogWhereInput.schema';

export const ReportChangeLogDeleteManySchema = z.object({ where: ReportChangeLogWhereInputObjectSchema.optional()  })