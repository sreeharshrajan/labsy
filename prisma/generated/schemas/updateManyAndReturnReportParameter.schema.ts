import { z } from 'zod';
import { ReportParameterSelectObjectSchema } from './objects/ReportParameterSelect.schema';
import { ReportParameterUpdateManyMutationInputObjectSchema } from './objects/ReportParameterUpdateManyMutationInput.schema';
import { ReportParameterWhereInputObjectSchema } from './objects/ReportParameterWhereInput.schema';

export const ReportParameterUpdateManyAndReturnSchema = z.object({ select: ReportParameterSelectObjectSchema.optional(), data: ReportParameterUpdateManyMutationInputObjectSchema, where: ReportParameterWhereInputObjectSchema.optional()  }).strict()