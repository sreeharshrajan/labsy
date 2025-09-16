import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportDetailScalarWhereInputObjectSchema } from './ReportDetailScalarWhereInput.schema';
import { ReportDetailUpdateManyMutationInputObjectSchema } from './ReportDetailUpdateManyMutationInput.schema';
import { ReportDetailUncheckedUpdateManyWithoutServiceInputObjectSchema } from './ReportDetailUncheckedUpdateManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportDetailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportDetailUpdateManyMutationInputObjectSchema), z.lazy(() => ReportDetailUncheckedUpdateManyWithoutServiceInputObjectSchema)])
}).strict();
export const ReportDetailUpdateManyWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportDetailUpdateManyWithWhereWithoutServiceInput>;
export const ReportDetailUpdateManyWithWhereWithoutServiceInputObjectZodSchema = makeSchema();
