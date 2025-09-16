import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUpdateWithoutInvoiceInput.schema';
import { ReportInvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedUpdateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceItemUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput>;
export const ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
