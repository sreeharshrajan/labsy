import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUpdateWithoutServiceInput.schema';
import { ReportInvoiceItemUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceItemUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedUpdateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInput>;
export const ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
