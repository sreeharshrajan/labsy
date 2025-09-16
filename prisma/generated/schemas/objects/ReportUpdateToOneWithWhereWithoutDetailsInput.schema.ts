import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereInputObjectSchema } from './ReportWhereInput.schema';
import { ReportUpdateWithoutDetailsInputObjectSchema } from './ReportUpdateWithoutDetailsInput.schema';
import { ReportUncheckedUpdateWithoutDetailsInputObjectSchema } from './ReportUncheckedUpdateWithoutDetailsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportUpdateWithoutDetailsInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutDetailsInputObjectSchema)])
}).strict();
export const ReportUpdateToOneWithWhereWithoutDetailsInputObjectSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutDetailsInput>;
export const ReportUpdateToOneWithWhereWithoutDetailsInputObjectZodSchema = makeSchema();
