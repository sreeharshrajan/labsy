import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportScalarRelationFilter>;
export const ReportScalarRelationFilterObjectZodSchema = makeSchema();
