import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceUpdateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUpdateWithoutPaymentsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutPaymentsInput.schema';
import { ReportInvoiceCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceCreateWithoutPaymentsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutPaymentsInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutPaymentsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema)]),
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoiceUpsertWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithoutPaymentsInput>;
export const ReportInvoiceUpsertWithoutPaymentsInputObjectZodSchema = makeSchema();
