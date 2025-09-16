import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentScalarWhereInputObjectSchema } from './ReportInvoicePaymentScalarWhereInput.schema';
import { ReportInvoicePaymentUpdateManyMutationInputObjectSchema } from './ReportInvoicePaymentUpdateManyMutationInput.schema';
import { ReportInvoicePaymentUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoicePaymentUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInput>;
export const ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
