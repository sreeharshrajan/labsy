import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutCollectedByUserInputObjectSchema } from './ReportCreateWithoutCollectedByUserInput.schema';
import { ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCollectedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCollectedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCollectedByUserInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutCollectedByUserInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCollectedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutCollectedByUserInput>;
export const ReportCreateOrConnectWithoutCollectedByUserInputObjectZodSchema = makeSchema();
