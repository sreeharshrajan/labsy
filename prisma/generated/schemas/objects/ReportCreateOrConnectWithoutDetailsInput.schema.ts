import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutDetailsInputObjectSchema } from './ReportCreateWithoutDetailsInput.schema';
import { ReportUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportUncheckedCreateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDetailsInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutDetailsInput>;
export const ReportCreateOrConnectWithoutDetailsInputObjectZodSchema = makeSchema();
