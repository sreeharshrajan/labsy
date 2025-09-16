import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogUpdateManyMutationInputObjectSchema } from './objects/ReportChangeLogUpdateManyMutationInput.schema';
import { ReportChangeLogWhereInputObjectSchema } from './objects/ReportChangeLogWhereInput.schema';

export const ReportChangeLogUpdateManyAndReturnSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), data: ReportChangeLogUpdateManyMutationInputObjectSchema, where: ReportChangeLogWhereInputObjectSchema.optional()  }).strict()