import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogIncludeObjectSchema } from './objects/ReportChangeLogInclude.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogCreateInputObjectSchema } from './objects/ReportChangeLogCreateInput.schema';
import { ReportChangeLogUncheckedCreateInputObjectSchema } from './objects/ReportChangeLogUncheckedCreateInput.schema';
import { ReportChangeLogUpdateInputObjectSchema } from './objects/ReportChangeLogUpdateInput.schema';
import { ReportChangeLogUncheckedUpdateInputObjectSchema } from './objects/ReportChangeLogUncheckedUpdateInput.schema';

export const ReportChangeLogUpsertSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), where: ReportChangeLogWhereUniqueInputObjectSchema, create: z.union([ ReportChangeLogCreateInputObjectSchema, ReportChangeLogUncheckedCreateInputObjectSchema ]), update: z.union([ ReportChangeLogUpdateInputObjectSchema, ReportChangeLogUncheckedUpdateInputObjectSchema ])  })