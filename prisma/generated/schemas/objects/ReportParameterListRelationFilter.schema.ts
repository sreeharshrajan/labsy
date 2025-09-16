import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterWhereInputObjectSchema } from './ReportParameterWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportParameterWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportParameterWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportParameterWhereInputObjectSchema).optional()
}).strict();
export const ReportParameterListRelationFilterObjectSchema: z.ZodType<Prisma.ReportParameterListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterListRelationFilter>;
export const ReportParameterListRelationFilterObjectZodSchema = makeSchema();
