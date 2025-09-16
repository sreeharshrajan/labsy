import { z } from 'zod';
import { ReportParameterSelectObjectSchema } from './objects/ReportParameterSelect.schema';
import { ReportParameterIncludeObjectSchema } from './objects/ReportParameterInclude.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './objects/ReportParameterWhereUniqueInput.schema';

export const ReportParameterDeleteOneSchema = z.object({ select: ReportParameterSelectObjectSchema.optional(), include: ReportParameterIncludeObjectSchema.optional(), where: ReportParameterWhereUniqueInputObjectSchema  })