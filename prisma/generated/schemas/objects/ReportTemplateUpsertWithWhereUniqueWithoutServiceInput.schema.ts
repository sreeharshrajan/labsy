import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateWithoutServiceInputObjectSchema } from './ReportTemplateUpdateWithoutServiceInput.schema';
import { ReportTemplateUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutServiceInput.schema';
import { ReportTemplateCreateWithoutServiceInputObjectSchema } from './ReportTemplateCreateWithoutServiceInput.schema';
import { ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportTemplateUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutServiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportTemplateUpsertWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpsertWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpsertWithWhereUniqueWithoutServiceInput>;
export const ReportTemplateUpsertWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
