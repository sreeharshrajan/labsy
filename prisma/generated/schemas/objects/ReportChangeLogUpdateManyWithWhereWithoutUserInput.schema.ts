import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogScalarWhereInputObjectSchema } from './ReportChangeLogScalarWhereInput.schema';
import { ReportChangeLogUpdateManyMutationInputObjectSchema } from './ReportChangeLogUpdateManyMutationInput.schema';
import { ReportChangeLogUncheckedUpdateManyWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportChangeLogUpdateManyMutationInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ReportChangeLogUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateManyWithWhereWithoutUserInput>;
export const ReportChangeLogUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
