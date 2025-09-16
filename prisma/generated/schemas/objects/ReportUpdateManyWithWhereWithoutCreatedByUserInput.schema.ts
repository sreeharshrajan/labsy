import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCreatedByUserInput>;
export const ReportUpdateManyWithWhereWithoutCreatedByUserInputObjectZodSchema = makeSchema();
