import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUpdateWithoutServiceInput.schema';
import { ReportInvoiceItemUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedUpdateWithoutServiceInput.schema';
import { ReportInvoiceItemCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutServiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoiceItemUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedUpdateWithoutServiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInput>;
export const ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
