import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereInputObjectSchema } from './ReportDetailWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportDetailWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportDetailWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportDetailWhereInputObjectSchema).optional()
}).strict();
export const ReportDetailListRelationFilterObjectSchema: z.ZodType<Prisma.ReportDetailListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailListRelationFilter>;
export const ReportDetailListRelationFilterObjectZodSchema = makeSchema();
