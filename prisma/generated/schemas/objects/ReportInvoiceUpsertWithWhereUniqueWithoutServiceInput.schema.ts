import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceUpdateWithoutServiceInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutServiceInput.schema';
import { ReportInvoiceCreateWithoutServiceInputObjectSchema } from './ReportInvoiceCreateWithoutServiceInput.schema';
import { ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutServiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutServiceInput>;
export const ReportInvoiceUpsertWithWhereUniqueWithoutServiceInputObjectZodSchema = makeSchema();
