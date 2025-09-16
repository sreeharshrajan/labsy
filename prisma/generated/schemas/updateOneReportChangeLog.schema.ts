import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogIncludeObjectSchema } from './objects/ReportChangeLogInclude.schema';
import { ReportChangeLogUpdateInputObjectSchema } from './objects/ReportChangeLogUpdateInput.schema';
import { ReportChangeLogUncheckedUpdateInputObjectSchema } from './objects/ReportChangeLogUncheckedUpdateInput.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';

export const ReportChangeLogUpdateOneSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), data: z.union([ReportChangeLogUpdateInputObjectSchema, ReportChangeLogUncheckedUpdateInputObjectSchema]), where: ReportChangeLogWhereUniqueInputObjectSchema  })