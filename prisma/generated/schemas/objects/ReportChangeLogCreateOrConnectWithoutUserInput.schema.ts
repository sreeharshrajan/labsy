import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogCreateWithoutUserInputObjectSchema } from './ReportChangeLogCreateWithoutUserInput.schema';
import { ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ReportChangeLogCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateOrConnectWithoutUserInput>;
export const ReportChangeLogCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
