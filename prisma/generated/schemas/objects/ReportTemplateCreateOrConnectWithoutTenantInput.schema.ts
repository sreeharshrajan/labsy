import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema';
import { ReportTemplateCreateWithoutTenantInputObjectSchema } from './ReportTemplateCreateWithoutTenantInput.schema';
import { ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportTemplateCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateOrConnectWithoutTenantInput>;
export const ReportTemplateCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
