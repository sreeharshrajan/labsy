import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutParameterInputObjectSchema } from './ReportDetailUpdateWithoutParameterInput.schema';
import { ReportDetailUncheckedUpdateWithoutParameterInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutParameterInput.schema';
import { ReportDetailCreateWithoutParameterInputObjectSchema } from './ReportDetailCreateWithoutParameterInput.schema';
import { ReportDetailUncheckedCreateWithoutParameterInputObjectSchema } from './ReportDetailUncheckedCreateWithoutParameterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportDetailUpdateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutParameterInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutParameterInputObjectSchema)])
}).strict();
export const ReportDetailUpsertWithWhereUniqueWithoutParameterInputObjectSchema: z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutParameterInput>;
export const ReportDetailUpsertWithWhereUniqueWithoutParameterInputObjectZodSchema = makeSchema();
