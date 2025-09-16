import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutReportTemplateInputObjectSchema } from './TenantCreateWithoutReportTemplateInput.schema';
import { TenantUncheckedCreateWithoutReportTemplateInputObjectSchema } from './TenantUncheckedCreateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportTemplateInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutReportTemplateInput>;
export const TenantCreateOrConnectWithoutReportTemplateInputObjectZodSchema = makeSchema();
