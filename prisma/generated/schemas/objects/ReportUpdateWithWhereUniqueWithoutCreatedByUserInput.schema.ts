import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutCreatedByUserInputObjectSchema } from './ReportUpdateWithoutCreatedByUserInput.schema';
import { ReportUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedUpdateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCreatedByUserInput>;
export const ReportUpdateWithWhereUniqueWithoutCreatedByUserInputObjectZodSchema = makeSchema();
