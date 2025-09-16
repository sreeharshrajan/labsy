import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailCreateWithoutParameterInputObjectSchema } from './ReportDetailCreateWithoutParameterInput.schema';
import { ReportDetailUncheckedCreateWithoutParameterInputObjectSchema } from './ReportDetailUncheckedCreateWithoutParameterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutParameterInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutParameterInputObjectSchema)])
}).strict();
export const ReportDetailCreateOrConnectWithoutParameterInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutParameterInput>;
export const ReportDetailCreateOrConnectWithoutParameterInputObjectZodSchema = makeSchema();
