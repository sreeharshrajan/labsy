import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterCreateWithoutTemplateInputObjectSchema } from './ReportParameterCreateWithoutTemplateInput.schema';
import { ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema } from './ReportParameterUncheckedCreateWithoutTemplateInput.schema';
import { ReportParameterCreateOrConnectWithoutTemplateInputObjectSchema } from './ReportParameterCreateOrConnectWithoutTemplateInput.schema';
import { ReportParameterCreateManyTemplateInputEnvelopeObjectSchema } from './ReportParameterCreateManyTemplateInputEnvelope.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportParameterCreateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterCreateWithoutTemplateInputObjectSchema).array(), z.lazy(() => ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutTemplateInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportParameterCreateOrConnectWithoutTemplateInputObjectSchema), z.lazy(() => ReportParameterCreateOrConnectWithoutTemplateInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportParameterCreateManyTemplateInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportParameterWhereUniqueInputObjectSchema), z.lazy(() => ReportParameterWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportParameterCreateNestedManyWithoutTemplateInputObjectSchema: z.ZodType<Prisma.ReportParameterCreateNestedManyWithoutTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCreateNestedManyWithoutTemplateInput>;
export const ReportParameterCreateNestedManyWithoutTemplateInputObjectZodSchema = makeSchema();
