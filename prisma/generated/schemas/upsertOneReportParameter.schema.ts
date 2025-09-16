import { z } from 'zod';
import { ReportParameterSelectObjectSchema } from './objects/ReportParameterSelect.schema';
import { ReportParameterIncludeObjectSchema } from './objects/ReportParameterInclude.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './objects/ReportParameterWhereUniqueInput.schema';
import { ReportParameterCreateInputObjectSchema } from './objects/ReportParameterCreateInput.schema';
import { ReportParameterUncheckedCreateInputObjectSchema } from './objects/ReportParameterUncheckedCreateInput.schema';
import { ReportParameterUpdateInputObjectSchema } from './objects/ReportParameterUpdateInput.schema';
import { ReportParameterUncheckedUpdateInputObjectSchema } from './objects/ReportParameterUncheckedUpdateInput.schema';

export const ReportParameterUpsertSchema = z.object({ select: ReportParameterSelectObjectSchema.optional(), include: ReportParameterIncludeObjectSchema.optional(), where: ReportParameterWhereUniqueInputObjectSchema, create: z.union([ ReportParameterCreateInputObjectSchema, ReportParameterUncheckedCreateInputObjectSchema ]), update: z.union([ ReportParameterUpdateInputObjectSchema, ReportParameterUncheckedUpdateInputObjectSchema ])  })