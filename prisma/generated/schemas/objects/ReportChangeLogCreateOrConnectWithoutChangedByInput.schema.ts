import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema';
import { ReportChangeLogCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateWithoutChangedByInput.schema';
import { ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutChangedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema)])
}).strict();
export const ReportChangeLogCreateOrConnectWithoutChangedByInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateOrConnectWithoutChangedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateOrConnectWithoutChangedByInput>;
export const ReportChangeLogCreateOrConnectWithoutChangedByInputObjectZodSchema = makeSchema();
