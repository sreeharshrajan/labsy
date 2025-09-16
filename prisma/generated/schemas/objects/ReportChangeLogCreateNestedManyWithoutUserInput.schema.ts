import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportChangeLogCreateWithoutUserInputObjectSchema } from './ReportChangeLogCreateWithoutUserInput.schema';
import { ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema } from './ReportChangeLogUncheckedCreateWithoutUserInput.schema';
import { ReportChangeLogCreateOrConnectWithoutUserInputObjectSchema } from './ReportChangeLogCreateOrConnectWithoutUserInput.schema';
import { ReportChangeLogCreateManyUserInputEnvelopeObjectSchema } from './ReportChangeLogCreateManyUserInputEnvelope.schema';
import { ReportChangeLogWhereUniqueInputObjectSchema } from './ReportChangeLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportChangeLogCreateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportChangeLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ReportChangeLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportChangeLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema), z.lazy(() => ReportChangeLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportChangeLogCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ReportChangeLogCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportChangeLogCreateNestedManyWithoutUserInput>;
export const ReportChangeLogCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
