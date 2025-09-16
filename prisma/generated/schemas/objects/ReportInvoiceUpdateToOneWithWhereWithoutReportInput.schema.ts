import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ReportInvoiceUpdateWithoutReportInputObjectSchema } from './ReportInvoiceUpdateWithoutReportInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutReportInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutReportInput>;
export const ReportInvoiceUpdateToOneWithWhereWithoutReportInputObjectZodSchema = makeSchema();
