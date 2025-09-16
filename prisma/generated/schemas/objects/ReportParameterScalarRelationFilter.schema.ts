import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterWhereInputObjectSchema } from './ReportParameterWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReportParameterWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ReportParameterWhereInputObjectSchema).optional()
}).strict();
export const ReportParameterScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportParameterScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterScalarRelationFilter>;
export const ReportParameterScalarRelationFilterObjectZodSchema = makeSchema();
