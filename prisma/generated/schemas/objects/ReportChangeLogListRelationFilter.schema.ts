import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereInputObjectSchema } from './ReportChangeLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReportChangeLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReportChangeLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReportChangeLogWhereInputObjectSchema).optional()
}).strict();
export const ReportChangeLogListRelationFilterObjectSchema: z.ZodType<Prisma.ReportChangeLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogListRelationFilter>;
export const ReportChangeLogListRelationFilterObjectZodSchema = makeSchema();
