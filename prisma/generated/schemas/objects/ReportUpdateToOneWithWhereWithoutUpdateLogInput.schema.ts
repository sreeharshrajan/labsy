import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportUpdateWithoutUpdateLogInputObjectSchema } from './ReportUpdateWithoutUpdateLogInput.schema';
import { ReportUncheckedUpdateWithoutUpdateLogInputObjectSchema } from './ReportUncheckedUpdateWithoutUpdateLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutUpdateLogInputObjectSchema)])
}).strict();
export const ReportUpdateToOneWithWhereWithoutUpdateLogInputObjectSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutUpdateLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutUpdateLogInput>;
export const ReportUpdateToOneWithWhereWithoutUpdateLogInputObjectZodSchema = makeSchema();
