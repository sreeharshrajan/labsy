import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutReportInputObjectSchema } from './ReportInvoiceCreateWithoutReportInput.schema';
import { ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutReportInput.schema';
import { ReportInvoiceCreateOrConnectWithoutReportInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutReportInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportInvoiceCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutReportInput>;
export const ReportInvoiceCreateNestedOneWithoutReportInputObjectZodSchema = makeSchema();
