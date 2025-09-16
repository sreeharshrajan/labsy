import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutUpdateLogInputObjectSchema } from './ReportCreateWithoutUpdateLogInput.schema';
import { ReportUncheckedCreateWithoutUpdateLogInputObjectSchema } from './ReportUncheckedCreateWithoutUpdateLogInput.schema';
import { ReportCreateOrConnectWithoutUpdateLogInputObjectSchema } from './ReportCreateOrConnectWithoutUpdateLogInput.schema';
import { ReportUpsertWithoutUpdateLogInputObjectSchema } from './ReportUpsertWithoutUpdateLogInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateToOneWithWhereWithoutUpdateLogInputObjectSchema } from './ReportUpdateToOneWithWhereWithoutUpdateLogInput.schema';
import { ReportUpdateWithoutUpdateLogInputObjectSchema } from './ReportUpdateWithoutUpdateLogInput.schema';
import { ReportUncheckedUpdateWithoutUpdateLogInputObjectSchema } from './ReportUncheckedUpdateWithoutUpdateLogInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutUpdateLogInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutUpdateLogInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutUpdateLogInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUpdateWithoutUpdateLogInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutUpdateLogInputObjectSchema)]).optional()
}).strict();
export const ReportUpdateOneRequiredWithoutUpdateLogNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutUpdateLogNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateOneRequiredWithoutUpdateLogNestedInput>;
export const ReportUpdateOneRequiredWithoutUpdateLogNestedInputObjectZodSchema = makeSchema();
