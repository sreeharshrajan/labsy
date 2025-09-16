import { z } from 'zod';
import { ReportChangeLogUpdateManyMutationInputObjectSchema } from './objects/ReportChangeLogUpdateManyMutationInput.schema';
import { ReportChangeLogWhereInputObjectSchema } from './objects/ReportChangeLogWhereInput.schema';

export const ReportChangeLogUpdateManySchema = z.object({ data: ReportChangeLogUpdateManyMutationInputObjectSchema, where: ReportChangeLogWhereInputObjectSchema.optional()  })