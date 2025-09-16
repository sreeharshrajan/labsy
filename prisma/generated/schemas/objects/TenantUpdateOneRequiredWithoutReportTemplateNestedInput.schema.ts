import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportTemplateInputObjectSchema } from './TenantCreateWithoutReportTemplateInput.schema';
import { TenantUncheckedCreateWithoutReportTemplateInputObjectSchema } from './TenantUncheckedCreateWithoutReportTemplateInput.schema';
import { TenantCreateOrConnectWithoutReportTemplateInputObjectSchema } from './TenantCreateOrConnectWithoutReportTemplateInput.schema';
import { TenantUpsertWithoutReportTemplateInputObjectSchema } from './TenantUpsertWithoutReportTemplateInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutReportTemplateInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutReportTemplateInput.schema';
import { TenantUpdateWithoutReportTemplateInputObjectSchema } from './TenantUpdateWithoutReportTemplateInput.schema';
import { TenantUncheckedUpdateWithoutReportTemplateInputObjectSchema } from './TenantUncheckedUpdateWithoutReportTemplateInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportTemplateInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportTemplateInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutReportTemplateInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUpdateWithoutReportTemplateInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportTemplateInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutReportTemplateNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportTemplateNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportTemplateNestedInput>;
export const TenantUpdateOneRequiredWithoutReportTemplateNestedInputObjectZodSchema = makeSchema();
