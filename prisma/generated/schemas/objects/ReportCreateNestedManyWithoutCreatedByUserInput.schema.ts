import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutCreatedByUserInputObjectSchema } from './ReportCreateWithoutCreatedByUserInput.schema';
import { ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByUserInput.schema';
import { ReportCreateOrConnectWithoutCreatedByUserInputObjectSchema } from './ReportCreateOrConnectWithoutCreatedByUserInput.schema';
import { ReportCreateManyCreatedByUserInputEnvelopeObjectSchema } from './ReportCreateManyCreatedByUserInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportCreateWithoutCreatedByUserInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutCreatedByUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyCreatedByUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutCreatedByUserInput>;
export const ReportCreateNestedManyWithoutCreatedByUserInputObjectZodSchema = makeSchema();
