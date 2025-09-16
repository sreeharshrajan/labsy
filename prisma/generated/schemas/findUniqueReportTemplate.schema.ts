import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReportTemplateSelectObjectSchema } from './objects/ReportTemplateSelect.schema';
import { ReportTemplateIncludeObjectSchema } from './objects/ReportTemplateInclude.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './objects/ReportTemplateWhereUniqueInput.schema';

export const ReportTemplateFindUniqueSchema: z.ZodType<Prisma.ReportTemplateFindUniqueArgs> = z.object({ select: ReportTemplateSelectObjectSchema.optional(), include: ReportTemplateIncludeObjectSchema.optional(), where: ReportTemplateWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportTemplateFindUniqueArgs>;

export const ReportTemplateFindUniqueZodSchema = z.object({ select: ReportTemplateSelectObjectSchema.optional(), include: ReportTemplateIncludeObjectSchema.optional(), where: ReportTemplateWhereUniqueInputObjectSchema }).strict();