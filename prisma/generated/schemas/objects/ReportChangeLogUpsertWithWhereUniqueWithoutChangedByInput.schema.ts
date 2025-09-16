import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithoutChangedByInputObjectSchema } from './ReportChangeLogUpdateWithoutChangedByInput.schema';
import { ReportChangeLogUncheckedUpdateWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedUpdateWithoutChangedByInput.schema';
import { ReportChangeLogCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateWithoutChangedByInput.schema';
import { ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutChangedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportChangeLogUpdateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateWithoutChangedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema)])
}).strict();
export const ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInput>;
export const ReportChangeLogUpsertWithWhereUniqueWithoutChangedByInputObjectZodSchema = makeSchema();
