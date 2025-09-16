import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCollectedByUserInputObjectSchema } from './ReportUpdateWithoutCollectedByUserInput.schema';
import { ReportUncheckedUpdateWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedUpdateWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCollectedByUserInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutCollectedByUserInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCollectedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCollectedByUserInput>;
export const ReportUpdateWithWhereUniqueWithoutCollectedByUserInputObjectZodSchema = makeSchema();
