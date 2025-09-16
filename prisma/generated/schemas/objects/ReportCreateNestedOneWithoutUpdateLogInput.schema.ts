import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutUpdateLogInputObjectSchema } from './ReportCreateWithoutUpdateLogInput.schema';
import { ReportUncheckedCreateWithoutUpdateLogInputObjectSchema } from './ReportUncheckedCreateWithoutUpdateLogInput.schema';
import { ReportCreateOrConnectWithoutUpdateLogInputObjectSchema } from './ReportCreateOrConnectWithoutUpdateLogInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdateLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutUpdateLogInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportCreateNestedOneWithoutUpdateLogInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutUpdateLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedOneWithoutUpdateLogInput>;
export const ReportCreateNestedOneWithoutUpdateLogInputObjectZodSchema = makeSchema();
