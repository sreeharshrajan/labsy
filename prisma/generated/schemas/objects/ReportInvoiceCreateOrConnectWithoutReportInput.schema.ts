import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutReportInputObjectSchema } from './ReportInvoiceCreateWithoutReportInput.schema';
import { ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutReportInput>;
export const ReportInvoiceCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
