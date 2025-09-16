import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateCreateWithoutServiceInputObjectSchema } from './ReportTemplateCreateWithoutServiceInput.schema';
import { ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportTemplateCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutServiceInput>;
export const ReportTemplateCreateOrConnectWithoutServiceInputObjectZodSchema = makeSchema();
