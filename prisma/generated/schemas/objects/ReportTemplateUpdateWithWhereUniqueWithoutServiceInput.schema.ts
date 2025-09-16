import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateWithoutServiceInputObjectSchema } from './ReportTemplateUpdateWithoutServiceInput.schema';
import { ReportTemplateUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportTemplateUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportTemplateUpdateWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateWithWhereUniqueWithoutServiceInput>;
export const ReportTemplateUpdateWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
