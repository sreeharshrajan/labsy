import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedUpdateManyWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutCollectedByUserInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutCollectedByUserInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCollectedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutCollectedByUserInput>;
export const ReportUpdateManyWithWhereWithoutCollectedByUserInputObjectZodSchema = makeSchema();
