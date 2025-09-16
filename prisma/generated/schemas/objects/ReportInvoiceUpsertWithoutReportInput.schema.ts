import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceUpdateWithoutReportInputObjectSchema } from './ReportInvoiceUpdateWithoutReportInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutReportInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutReportInput.schema';
import { ReportInvoiceCreateWithoutReportInputObjectSchema } from './ReportInvoiceCreateWithoutReportInput.schema';
import { ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutReportInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoiceUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithoutReportInput>;
export const ReportInvoiceUpsertWithoutReportInputObjectZodSchema = makeSchema();
