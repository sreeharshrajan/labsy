import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportTemplateInputObjectSchema } from './TenantCreateWithoutReportTemplateInput.schema';
import { TenantUncheckedCreateWithoutReportTemplateInputObjectSchema } from './TenantUncheckedCreateWithoutReportTemplateInput.schema';
import { TenantCreateOrConnectWithoutReportTemplateInputObjectSchema } from './TenantCreateOrConnectWithoutReportTemplateInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportTemplateInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportTemplateInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutReportTemplateInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutReportTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutReportTemplateInput>;
export const TenantCreateNestedOneWithoutReportTemplateInputObjectZodSchema = makeSchema();
