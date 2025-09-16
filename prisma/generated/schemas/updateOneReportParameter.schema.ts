import { z } from 'zod';
import { ReportParameterSelectObjectSchema } from './objects/ReportParameterSelect.schema';
import { ReportParameterIncludeObjectSchema } from './objects/ReportParameterInclude.schema';
import { ReportParameterUpdateInputObjectSchema } from './objects/ReportParameterUpdateInput.schema';
import { ReportParameterUncheckedUpdateInputObjectSchema } from './objects/ReportParameterUncheckedUpdateInput.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './objects/ReportParameterWhereUniqueInput.schema';

export const ReportParameterUpdateOneSchema = z.object({ select: ReportParameterSelectObjectSchema.optional(), include: ReportParameterIncludeObjectSchema.optional(), data: z.union([ReportParameterUpdateInputObjectSchema, ReportParameterUncheckedUpdateInputObjectSchema]), where: ReportParameterWhereUniqueInputObjectSchema  })