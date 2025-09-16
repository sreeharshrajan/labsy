import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCollectedByUserInputObjectSchema } from './ReportCreateWithoutCollectedByUserInput.schema';
import { ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCollectedByUserInput.schema';
import { ReportCreateOrConnectWithoutCollectedByUserInputObjectSchema } from './ReportCreateOrConnectWithoutCollectedByUserInput.schema';
import { ReportCreateManyCollectedByUserInputEnvelopeObjectSchema } from './ReportCreateManyCollectedByUserInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportCreateWithoutCollectedByUserInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCollectedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCollectedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutCollectedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutCollectedByUserInput>;
export const ReportUncheckedCreateNestedManyWithoutCollectedByUserInputObjectZodSchema = makeSchema();
