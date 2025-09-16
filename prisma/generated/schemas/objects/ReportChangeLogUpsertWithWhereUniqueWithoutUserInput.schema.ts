import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithoutUserInputObjectSchema } from './ReportChangeLogUpdateWithoutUserInput.schema';
import { ReportChangeLogUncheckedUpdateWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedUpdateWithoutUserInput.schema';
import { ReportChangeLogCreateWithoutUserInputObjectSchema } from './ReportChangeLogCreateWithoutUserInput.schema';
import { ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportChangeLogUpdateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ReportChangeLogUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpsertWithWhereUniqueWithoutUserInput>;
export const ReportChangeLogUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
