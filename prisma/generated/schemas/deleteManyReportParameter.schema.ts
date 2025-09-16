import { z } from 'zod';
import { ReportParameterWhereInputObjectSchema } from './objects/ReportParameterWhereInput.schema';

export const ReportParameterDeleteManySchema = z.object({ where: ReportParameterWhereInputObjectSchema.optional()  })