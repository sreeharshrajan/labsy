import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateUpdateWithoutTenantInputObjectSchema } from './ReportTemplateUpdateWithoutTenantInput.schema';
import { ReportTemplateUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedUpdateWithoutTenantInput.schema';
import { ReportTemplateCreateWithoutTenantInputObjectSchema } from './ReportTemplateCreateWithoutTenantInput.schema';
import { ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportTemplateUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportTemplateUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpsertWithWhereUniqueWithoutTenantInput>;
export const ReportTemplateUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
