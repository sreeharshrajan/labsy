import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUpdateWithoutDetailsInputObjectSchema } from './ReportUpdateWithoutDetailsInput.schema';
import { ReportUncheckedUpdateWithoutDetailsInputObjectSchema } from './ReportUncheckedUpdateWithoutDetailsInput.schema';
import { ReportCreateWithoutDetailsInputObjectSchema } from './ReportCreateWithoutDetailsInput.schema';
import { ReportUncheckedCreateWithoutDetailsInputObjectSchema } from './ReportUncheckedCreateWithoutDetailsInput.schema';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportUpdateWithoutDetailsInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutDetailsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutDetailsInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutDetailsInputObjectSchema)]),
  where: z.lazy(() => ReportWhereInputObjectSchema).optional()
}).strict();
export const ReportUpsertWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithoutDetailsInput>;
export const ReportUpsertWithoutDetailsInputObjectZodSchema = makeSchema();
