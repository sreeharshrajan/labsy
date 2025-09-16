import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema';
import { ReportParameterCreateWithoutDetailsInputObjectSchema } from './ReportParameterCreateWithoutDetailsInput.schema';
import { ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportParameterUncheckedCreateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportParameterWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportParameterCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema)])
}).strict();
export const ReportParameterCreateOrConnectWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportParameterCreateOrConnectWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCreateOrConnectWithoutDetailsInput>;
export const ReportParameterCreateOrConnectWithoutDetailsInputObjectZodSchema = makeSchema();
