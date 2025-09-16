import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutCustomerInputObjectSchema } from './ReportInvoiceUpdateWithoutCustomerInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutCustomerInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutCustomerInput.schema';
import { ReportInvoiceCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceCreateWithoutCustomerInput.schema';
import { ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutCustomerInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInput>;
export const ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInputObjectZodSchema = makeSchema();
