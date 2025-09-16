import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutLogsInputObjectSchema } from './ReportInvoiceCreateWithoutLogsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutLogsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutLogsInput>;
export const ReportInvoiceCreateOrConnectWithoutLogsInputObjectZodSchema = makeSchema();
