import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterUpdateWithoutDetailsInputObjectSchema } from './ReportParameterUpdateWithoutDetailsInput.schema';
import { ReportParameterUncheckedUpdateWithoutDetailsInputObjectSchema } from './ReportParameterUncheckedUpdateWithoutDetailsInput.schema';
import { ReportParameterCreateWithoutDetailsInputObjectSchema } from './ReportParameterCreateWithoutDetailsInput.schema';
import { ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportParameterUncheckedCreateWithoutDetailsInput.schema';
import { ReportParameterWhereInputObjectSchema } from './ReportParameterWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportParameterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUncheckedUpdateWithoutDetailsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportParameterCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUncheckedCreateWithoutDetailsInputObjectSchema)]),
  where: z.lazy(() => ReportParameterWhereInputObjectSchema).optional()
}).strict();
export const ReportParameterUpsertWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportParameterUpsertWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterUpsertWithoutDetailsInput>;
export const ReportParameterUpsertWithoutDetailsInputObjectZodSchema = makeSchema();
