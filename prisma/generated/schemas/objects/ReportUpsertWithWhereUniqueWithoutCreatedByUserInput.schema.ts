import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCreatedByUserInputObjectSchema } from './ReportUpdateWithoutCreatedByUserInput.schema';
import { ReportUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedUpdateWithoutCreatedByUserInput.schema';
import { ReportCreateWithoutCreatedByUserInputObjectSchema } from './ReportCreateWithoutCreatedByUserInput.schema';
import { ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreatedByUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCreatedByUserInput>;
export const ReportUpsertWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
