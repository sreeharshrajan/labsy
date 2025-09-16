import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutReportTemplateInputObjectSchema } from './TenantUpdateWithoutReportTemplateInput.schema';
import { TenantUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './TenantUncheckedUpdateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportTemplateInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportTemplateInput>;
export const TenantUpdateToOneWithWhereWithoutReportTemplateInputObjectZodSchema = makeSchema();
