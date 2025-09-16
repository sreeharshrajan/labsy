import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailCreateWithoutParameterInputObjectSchema } from './ReportDetailCreateWithoutParameterInput.schema';
import { ReportDetailUncheckedCreateWithoutParameterInputObjectSchema } from './ReportDetailUncheckedCreateWithoutParameterInput.schema';
import { ReportDetailCreateOrConnectWithoutParameterInputObjectSchema } from './ReportDetailCreateOrConnectWithoutParameterInput.schema';
import { ReportDetailCreateManyParameterInputEnvelopeObjectSchema } from './ReportDetailCreateManyParameterInputEnvelope.schema';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportDetailCreateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailCreateWithoutParameterInputObjectSchema).array(), z.lazy(() => ReportDetailUncheckedCreateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutParameterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportDetailCreateOrConnectWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailCreateOrConnectWithoutParameterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportDetailCreateManyParameterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportDetailWhereUniqueInputObjectSchema), z.lazy(() => ReportDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportDetailUncheckedCreateNestedManyWithoutParameterInputObjectSchema: z.ZodType<Prisma.ReportDetailUncheckedCreateNestedManyWithoutParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUncheckedCreateNestedManyWithoutParameterInput>;
export const ReportDetailUncheckedCreateNestedManyWithoutParameterInputObjectZodSchema = makeSchema();
