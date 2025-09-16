import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutUpdateLogInputObjectSchema } from './ReportCreateWithoutUpdateLogInput.schema';
import { ReportUncheckedCreateWithoutUpdateLogInputObjectSchema } from './ReportUncheckedCreateWithoutUpdateLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdateLogInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutUpdateLogInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutUpdateLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutUpdateLogInput>;
export const ReportCreateOrConnectWithoutUpdateLogInputObjectZodSchema = makeSchema();
