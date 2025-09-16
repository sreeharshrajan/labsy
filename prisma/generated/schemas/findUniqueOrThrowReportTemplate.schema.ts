import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportTemplateSelectObjectSchema } from './objects/ReportTemplateSelect.schema';
import { ReportTemplateIncludeObjectSchema } from './objects/ReportTemplateInclude.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './objects/ReportTemplateWhereUniqueInput.schema';

export const ReportTemplateFindUniqueOrThrowSchema: z.ZodType<Prisma.ReportTemplateFindUniqueOrThrowArgs> = z.object({ select: ReportTemplateSelectObjectSchema.optional(), include: ReportTemplateIncludeObjectSchema.optional(), where: ReportTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportTemplateFindUniqueOrThrowArgs>;

export const ReportTemplateFindUniqueOrThrowZodSchema = z.object({ select: ReportTemplateSelectObjectSchema.optional(), include: ReportTemplateIncludeObjectSchema.optional(), where: ReportTemplateWhereUniqueInputObjectSchema }).strict();