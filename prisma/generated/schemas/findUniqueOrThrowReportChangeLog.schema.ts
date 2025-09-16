import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportChangeLogSelectObjectSchema } from './objects/ReportChangeLogSelect.schema';
import { ReportChangeLogIncludeObjectSchema } from './objects/ReportChangeLogInclude.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './objects/ReportChangeLogWhereUniqueInput.schema';

export const ReportChangeLogFindUniqueOrThrowSchema: z.ZodType<Prisma.ReportChangeLogFindUniqueOrThrowArgs> = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), where: ReportChangeLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportChangeLogFindUniqueOrThrowArgs>;

export const ReportChangeLogFindUniqueOrThrowZodSchema = z.object({ select: ReportChangeLogSelectObjectSchema.optional(), include: ReportChangeLogIncludeObjectSchema.optional(), where: ReportChangeLogWhereUniqueInputObjectSchema }).strict();