import { z } from 'zod';
import { ReportParameterUpdateManyMutationInputObjectSchema } from './objects/ReportParameterUpdateManyMutationInput.schema';
import { ReportParameterWhereInputObjectSchema } from './objects/ReportParameterWhereInput.schema';

export const ReportParameterUpdateManySchema = z.object({ data: ReportParameterUpdateManyMutationInputObjectSchema, where: ReportParameterWhereInputObjectSchema.optional()  })