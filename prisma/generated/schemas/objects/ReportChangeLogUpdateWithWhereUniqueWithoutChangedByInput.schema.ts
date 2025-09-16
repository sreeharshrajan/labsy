import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithoutChangedByInputObjectSchema } from './ReportChangeLogUpdateWithoutChangedByInput.schema';
import { ReportChangeLogUncheckedUpdateWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedUpdateWithoutChangedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportChangeLogUpdateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateWithoutChangedByInputObjectSchema)])
}).strict();
export const ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInput>;
export const ReportChangeLogUpdateWithWhereUniqueWithoutChangedByInputObjectZodSchema = makeSchema();
