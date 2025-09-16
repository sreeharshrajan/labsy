import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutReportInputObjectSchema } from './ReportInvoiceCreateWithoutReportInput.schema';
import { ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutReportInput.schema';
import { ReportInvoiceCreateOrConnectWithoutReportInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutReportInput.schema';
import { ReportInvoiceUpsertWithoutReportInputObjectSchema } from './ReportInvoiceUpsertWithoutReportInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateToOneWithWhereWithoutReportInputObjectSchema } from './ReportInvoiceUpdateToOneWithWhereWithoutReportInput.schema';
import { ReportInvoiceUpdateWithoutReportInputObjectSchema } from './ReportInvoiceUpdateWithoutReportInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutReportInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportInvoiceUpsertWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithoutReportInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const ReportInvoiceUpdateOneRequiredWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateOneRequiredWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateOneRequiredWithoutReportNestedInput>;
export const ReportInvoiceUpdateOneRequiredWithoutReportNestedInputObjectZodSchema = makeSchema();
