import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportListRelationFilterObjectSchema: z.ZodType<Prisma.ReportListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportListRelationFilter>;
export const ReportListRelationFilterObjectZodSchema = makeSchema();
