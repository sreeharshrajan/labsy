import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutDetailsInputObjectSchema } from './ReportCreateWithoutDetailsInput.schema';
import { ReportUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportUncheckedCreateWithoutDetailsInput.schema';
import { ReportCreateOrConnectWithoutDetailsInputObjectSchema } from './ReportCreateOrConnectWithoutDetailsInput.schema';
import { ReportUpsertWithoutDetailsInputObjectSchema } from './ReportUpsertWithoutDetailsInput.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateToOneWithWhereWithoutDetailsInputObjectSchema } from './ReportUpdateToOneWithWhereWithoutDetailsInput.schema';
import { ReportUpdateWithoutDetailsInputObjectSchema } from './ReportUpdateWithoutDetailsInput.schema';
import { ReportUncheckedUpdateWithoutDetailsInputObjectSchema } from './ReportUncheckedUpdateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportUpdateToOneWithWhereWithoutDetailsInputObjectSchema), z.lazy(() => ReportUpdateWithoutDetailsInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutDetailsInputObjectSchema)]).optional()
}).strict();
export const ReportUpdateOneRequiredWithoutDetailsNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutDetailsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateOneRequiredWithoutDetailsNestedInput>;
export const ReportUpdateOneRequiredWithoutDetailsNestedInputObjectZodSchema = makeSchema();
