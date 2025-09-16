import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateScalarWhereInputObjectSchema } from './ReportTemplateScalarWhereInput.schema';
import { ReportTemplateUpdateManyMutationInputObjectSchema } from './ReportTemplateUpdateManyMutationInput.schema';
import { ReportTemplateUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportTemplateScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportTemplateUpdateManyMutationInputObjectSchema), z.lazy(() => ReportTemplateUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ReportTemplateUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUpdateManyWithWhereWithoutTenantInput>;
export const ReportTemplateUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
