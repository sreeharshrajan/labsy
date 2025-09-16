import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportParameterSelectObjectSchema } from './objects/ReportParameterSelect.schema';
import { ReportParameterIncludeObjectSchema } from './objects/ReportParameterInclude.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './objects/ReportParameterWhereUniqueInput.schema';

export const ReportParameterFindUniqueSchema: z.ZodType<Prisma.ReportParameterFindUniqueArgs> = z.object({ select: ReportParameterSelectObjectSchema.optional(), include: ReportParameterIncludeObjectSchema.optional(), where: ReportParameterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportParameterFindUniqueArgs>;

export const ReportParameterFindUniqueZodSchema = z.object({ select: ReportParameterSelectObjectSchema.optional(), include: ReportParameterIncludeObjectSchema.optional(), where: ReportParameterWhereUniqueInputObjectSchema }).strict();