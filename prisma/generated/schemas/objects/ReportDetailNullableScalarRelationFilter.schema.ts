import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereInputObjectSchema } from './ReportDetailWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReportDetailWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ReportDetailWhereInputObjectSchema).optional().nullable()
}).strict();
export const ReportDetailNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReportDetailNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailNullableScalarRelationFilter>;
export const ReportDetailNullableScalarRelationFilterObjectZodSchema = makeSchema();
