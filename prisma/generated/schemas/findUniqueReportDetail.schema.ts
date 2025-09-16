import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportDetailSelectObjectSchema } from './objects/ReportDetailSelect.schema';
import { ReportDetailIncludeObjectSchema } from './objects/ReportDetailInclude.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './objects/ReportDetailWhereUniqueInput.schema';

export const ReportDetailFindUniqueSchema: z.ZodType<Prisma.ReportDetailFindUniqueArgs> = z.object({ select: ReportDetailSelectObjectSchema.optional(), include: ReportDetailIncludeObjectSchema.optional(), where: ReportDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportDetailFindUniqueArgs>;

export const ReportDetailFindUniqueZodSchema = z.object({ select: ReportDetailSelectObjectSchema.optional(), include: ReportDetailIncludeObjectSchema.optional(), where: ReportDetailWhereUniqueInputObjectSchema }).strict();