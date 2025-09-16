import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUpdateWithoutReportInvoicePaymentInput.schema';
import { TenantUncheckedUpdateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInvoicePaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInvoicePaymentInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutReportInvoicePaymentInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportInvoicePaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportInvoicePaymentInput>;
export const TenantUpdateToOneWithWhereWithoutReportInvoicePaymentInputObjectZodSchema = makeSchema();
