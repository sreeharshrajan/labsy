import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogIncludeObjectSchema } from './objects/ReportChangeLogInclude.schema';
import { ReportChangeLogCreateInputObjectSchema } from './objects/ReportChangeLogCreateInput.schema';
import { ReportChangeLogUncheckedCreateInputObjectSchema } from './objects/ReportChangeLogUncheckedCreateInput.schema';

export const ReportChangeLogCreateOneSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), data: z.union([ReportChangeLogCreateInputObjectSchema, ReportChangeLogUncheckedCreateInputObjectSchema])  })