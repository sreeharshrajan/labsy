import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceUpdateWithoutLogsInputObjectSchema } from './ReportInvoiceUpdateWithoutLogsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutLogsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutLogsInput.schema';
import { ReportInvoiceCreateWithoutLogsInputObjectSchema } from './ReportInvoiceCreateWithoutLogsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutLogsInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema)]),
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoiceUpsertWithoutLogsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithoutLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithoutLogsInput>;
export const ReportInvoiceUpsertWithoutLogsInputObjectZodSchema = makeSchema();
