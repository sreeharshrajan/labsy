import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutServiceInputObjectSchema } from './ReportDetailUpdateWithoutServiceInput.schema';
import { ReportDetailUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutServiceInput.schema';
import { ReportDetailCreateWithoutServiceInputObjectSchema } from './ReportDetailCreateWithoutServiceInput.schema';
import { ReportDetailUncheckedCreateWithoutServiceInputObjectSchema } from './ReportDetailUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportDetailUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutServiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportDetailUpsertWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpsertWithWhereUniqueWithoutServiceInput>;
export const ReportDetailUpsertWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
