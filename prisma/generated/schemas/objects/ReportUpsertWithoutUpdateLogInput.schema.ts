import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUpdateWithoutUpdateLogInputObjectSchema } from './ReportUpdateWithoutUpdateLogInput.schema';
import { ReportUncheckedUpdateWithoutUpdateLogInputObjectSchema } from './ReportUncheckedUpdateWithoutUpdateLogInput.schema';
import { ReportCreateWithoutUpdateLogInputObjectSchema } from './ReportCreateWithoutUpdateLogInput.schema';
import { ReportUncheckedCreateWithoutUpdateLogInputObjectSchema } from './ReportUncheckedCreateWithoutUpdateLogInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutUpdateLogInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdateLogInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportUpsertWithoutUpdateLogInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithoutUpdateLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithoutUpdateLogInput>;
export const ReportUpsertWithoutUpdateLogInputObjectZodSchema = makeSchema();
