import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceCreateWithoutPaymentsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutPaymentsInput>;
export const ReportInvoiceCreateOrConnectWithoutPaymentsInputObjectZodSchema = makeSchema();
