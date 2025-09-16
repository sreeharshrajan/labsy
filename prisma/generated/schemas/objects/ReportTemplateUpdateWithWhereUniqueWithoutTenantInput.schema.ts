import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateWithoutTenantInputObjectSchema } from './ReportTemplateUpdateWithoutTenantInput.schema';
import { ReportTemplateUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportTemplateUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportTemplateUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateWithWhereUniqueWithoutTenantInput>;
export const ReportTemplateUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
