import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutTenantInputObjectSchema } from './ReportTemplateCreateWithoutTenantInput.schema';
import { ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutTenantInput.schema';
import { ReportTemplateCreateOrConnectWithoutTenantInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutTenantInput.schema';
import { ReportTemplateCreateManyTenantInputEnvelopeObjectSchema } from './ReportTemplateCreateManyTenantInputEnvelope.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportTemplateCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportTemplateCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportTemplateCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportTemplateCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportTemplateCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateCreateNestedManyWithoutTenantInput>;
export const ReportTemplateCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
