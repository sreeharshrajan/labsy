import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailUpdateWithoutServiceInputObjectSchema } from './ReportDetailUpdateWithoutServiceInput.schema';
import { ReportDetailUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportDetailUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportDetailUpdateWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateWithWhereUniqueWithoutServiceInput>;
export const ReportDetailUpdateWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
