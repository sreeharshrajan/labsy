import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ReportInvoiceUpdateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUpdateWithoutPaymentsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutPaymentsInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateToOneWithWhereWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutPaymentsInput>;
export const ReportInvoiceUpdateToOneWithWhereWithoutPaymentsInputObjectZodSchema = makeSchema();
