import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportParameterWhereInputObjectSchema } from './ReportParameterWhereInput.schema';
import { ReportParameterUpdateWithoutDetailsInputObjectSchema } from './ReportParameterUpdateWithoutDetailsInput.schema';
import { ReportParameterUncheckedUpdateWithoutDetailsInputObjectSchema } from './ReportParameterUncheckedUpdateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportParameterWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportParameterUpdateWithoutDetailsInputObjectSchema), z.lazy(() => ReportParameterUncheckedUpdateWithoutDetailsInputObjectSchema)])
}).strict();
export const ReportParameterUpdateToOneWithWhereWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportParameterUpdateToOneWithWhereWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportParameterUpdateToOneWithWhereWithoutDetailsInput>;
export const ReportParameterUpdateToOneWithWhereWithoutDetailsInputObjectZodSchema = makeSchema();
