import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogIncludeObjectSchema } from './objects/ReportChangeLogInclude.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';

export const ReportChangeLogFindUniqueSchema: z.ZodType<Prisma.ReportChangeLogFindUniqueArgs> = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), where: ReportChangeLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportChangeLogFindUniqueArgs>;

export const ReportChangeLogFindUniqueZodSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), where: ReportChangeLogWhereUniqueInputObjectSchema }).strict();