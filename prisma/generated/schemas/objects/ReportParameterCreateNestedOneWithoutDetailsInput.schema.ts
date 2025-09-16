import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterCreateWithoutDetailsInputObjectSchema } from './ReportParameterCreateWithoutDetailsInput.schema';
import { ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportParameterUncheckedCreateWithoutDetailsInput.schema';
import { ReportParameterCreateOrConnectWithoutDetailsInputObjectSchema } from './ReportParameterCreateOrConnectWithoutDetailsInput.schema';
import { ReportParameterWhereUniqueInputObjectSchema } from './ReportParameterWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportParameterCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportParameterCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportParameterWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportParameterCreateNestedOneWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportParameterCreateNestedOneWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterCreateNestedOneWithoutDetailsInput>;
export const ReportParameterCreateNestedOneWithoutDetailsInputObjectZodSchema = makeSchema();
