import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutInvoiceInputObjectSchema } from './ReportUpdateWithoutInvoiceInput.schema';
import { ReportUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ReportUncheckedUpdateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutInvoiceInput>;
export const ReportUpdateWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
