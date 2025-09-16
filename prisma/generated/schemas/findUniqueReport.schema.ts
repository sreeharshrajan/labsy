import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportFindUniqueSchema: z.ZodType<Prisma.ReportFindUniqueArgs> = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportFindUniqueArgs>;

export const ReportFindUniqueZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), where: ReportWhereUniqueInputObjectSchema }).strict();