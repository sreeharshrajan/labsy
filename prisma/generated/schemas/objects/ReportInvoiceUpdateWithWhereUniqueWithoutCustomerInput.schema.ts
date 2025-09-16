import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutCustomerInputObjectSchema } from './ReportInvoiceUpdateWithoutCustomerInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutCustomerInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInput>;
export const ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
