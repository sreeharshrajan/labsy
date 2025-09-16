import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceUpdateWithoutServiceInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutServiceInput>;
export const ReportInvoiceUpdateWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
