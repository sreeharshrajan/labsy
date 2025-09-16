import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCollectedByUserInputObjectSchema } from './ReportUpdateWithoutCollectedByUserInput.schema';
import { ReportUncheckedUpdateWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedUpdateWithoutCollectedByUserInput.schema';
import { ReportCreateWithoutCollectedByUserInputObjectSchema } from './ReportCreateWithoutCollectedByUserInput.schema';
import { ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCollectedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutCollectedByUserInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCollectedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCollectedByUserInput>;
export const ReportUpsertWithWhereUniqueWithoutCollectedByUserInputObjectZodSchema = makeSchema();
