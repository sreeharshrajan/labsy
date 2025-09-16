import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutCreatedByUserInputObjectSchema } from './ReportCreateWithoutCreatedByUserInput.schema';
import { ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema } from './ReportUncheckedCreateWithoutCreatedByUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutCreatedByUserInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatedByUserInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutCreatedByUserInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutCreatedByUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutCreatedByUserInput>;
export const ReportCreateOrConnectWithoutCreatedByUserInputObjectZodSchema = makeSchema();
