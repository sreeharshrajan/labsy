import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogUpdateWithoutUserInputObjectSchema } from './ReportChangeLogUpdateWithoutUserInput.schema';
import { ReportChangeLogUncheckedUpdateWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportChangeLogUpdateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ReportChangeLogUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ReportChangeLogUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogUpdateWithWhereUniqueWithoutUserInput>;
export const ReportChangeLogUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
