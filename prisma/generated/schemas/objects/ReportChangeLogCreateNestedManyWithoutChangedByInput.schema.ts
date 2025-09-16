import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateWithoutChangedByInput.schema';
import { ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutChangedByInput.schema';
import { ReportChangeLogCreateOrConnectWithoutChangedByInputObjectSchema } from './ReportChangeLogCreateOrConnectWithoutChangedByInput.schema';
import { ReportChangeLogCreateManyChangedByInputEnvelopeObjectSchema } from './ReportChangeLogCreateManyChangedByInputEnvelope.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogCreateWithoutChangedByInputObjectSchema).array(), z.lazy(() => ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutChangedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportChangeLogCreateOrConnectWithoutChangedByInputObjectSchema), z.lazy(() => ReportChangeLogCreateOrConnectWithoutChangedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportChangeLogCreateManyChangedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportChangeLogCreateNestedManyWithoutChangedByInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateNestedManyWithoutChangedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateNestedManyWithoutChangedByInput>;
export const ReportChangeLogCreateNestedManyWithoutChangedByInputObjectZodSchema = makeSchema();
