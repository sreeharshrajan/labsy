import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUpdateWithoutInvoiceInput.schema';
import { ReportInvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedUpdateWithoutInvoiceInput.schema';
import { ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutInvoiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoiceItemUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedUpdateWithoutInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput>;
export const ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
