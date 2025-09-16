import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportTemplateCreateWithoutServiceInputObjectSchema } from './ReportTemplateCreateWithoutServiceInput.schema';
import { ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema } from './ReportTemplateUncheckedCreateWithoutServiceInput.schema';
import { ReportTemplateCreateOrConnectWithoutServiceInputObjectSchema } from './ReportTemplateCreateOrConnectWithoutServiceInput.schema';
import { ReportTemplateCreateManyServiceInputEnvelopeObjectSchema } from './ReportTemplateCreateManyServiceInputEnvelope.schema';
import { ReportTemplateWhereUniqueInputObjectSchema } from './ReportTemplateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportTemplateCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportTemplateCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportTemplateCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportTemplateCreateManyServiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema), z.lazy(() => ReportTemplateWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportTemplateUncheckedCreateNestedManyWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportTemplateUncheckedCreateNestedManyWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportTemplateUncheckedCreateNestedManyWithoutServiceInput>;
export const ReportTemplateUncheckedCreateNestedManyWithoutServiceInputObjectZodSchema = makeSchema();
