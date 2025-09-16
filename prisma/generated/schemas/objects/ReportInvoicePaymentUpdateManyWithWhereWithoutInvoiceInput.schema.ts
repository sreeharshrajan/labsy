import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentScalarWhereInputObjectSchema } from './ReportInvoicePaymentScalarWhereInput.schema';
import { ReportInvoicePaymentUpdateManyMutationInputObjectSchema } from './ReportInvoicePaymentUpdateManyMutationInput.schema';
import { ReportInvoicePaymentUncheckedUpdateManyWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedUpdateManyWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoicePaymentUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedUpdateManyWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInput>;
export const ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInputObjectZodSchema = makeSchema();
