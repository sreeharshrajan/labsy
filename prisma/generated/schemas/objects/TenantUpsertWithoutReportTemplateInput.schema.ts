import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutReportTemplateInputObjectSchema } from './TenantUpdateWithoutReportTemplateInput.schema';
import { TenantUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './TenantUncheckedUpdateWithoutReportTemplateInput.schema';
import { TenantCreateWithoutReportTemplateInputObjectSchema } from './TenantCreateWithoutReportTemplateInput.schema';
import { TenantUncheckedCreateWithoutReportTemplateInputObjectSchema } from './TenantUncheckedCreateWithoutReportTemplateInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportTemplateInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportTemplateInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutReportTemplateInput>;
export const TenantUpsertWithoutReportTemplateInputObjectZodSchema = makeSchema();
