import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema';
import { ReportDetailUpdateManyMutationInputObjectSchema } from './ReportDetailUpdateManyMutationInput.schema';
import { ReportDetailUncheckedUpdateManyWithoutParameterInputObjectSchema } from './ReportDetailUncheckedUpdateManyWithoutParameterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateManyMutationInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateManyWithoutParameterInputObjectSchema)])
}).strict();
export const ReportDetailUpdateManyWithWhereWithoutParameterInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutParameterInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutParameterInput>;
export const ReportDetailUpdateManyWithWhereWithoutParameterInputObjectZodSchema = makeSchema();
