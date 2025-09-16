import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutParameterInputObjectSchema } from './ReportDetailUpdateWithoutParameterInput.schema';
import { ReportDetailUncheckedUpdateWithoutParameterInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutParameterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutParameterInputObjectSchema)])
}).strict();
export const ReportDetailUpdateWithWhereUniqueWithoutParameterInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutParameterInput>;
export const ReportDetailUpdateWithWhereUniqueWithoutParameterInputObjectZodSchema = makeSchema();
