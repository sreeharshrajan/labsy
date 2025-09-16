import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailWhereUniqueInputObjectSchema } from './ReportDetailWhereUniqueInput.schema';
import { ReportDetailCreateWithoutServiceInputObjectSchema } from './ReportDetailCreateWithoutServiceInput.schema';
import { ReportDetailUncheckedCreateWithoutServiceInputObjectSchema } from './ReportDetailUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportDetailCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportDetailUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportDetailCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailCreateOrConnectWithoutServiceInput>;
export const ReportDetailCreateOrConnectWithoutServiceInputObjectZodSchema = makeSchema();
