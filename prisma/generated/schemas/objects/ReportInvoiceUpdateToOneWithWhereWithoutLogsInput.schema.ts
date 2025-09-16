import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ReportInvoiceUpdateWithoutLogsInputObjectSchema } from './ReportInvoiceUpdateWithoutLogsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutLogsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutLogsInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateToOneWithWhereWithoutLogsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutLogsInput>;
export const ReportInvoiceUpdateToOneWithWhereWithoutLogsInputObjectZodSchema = makeSchema();
