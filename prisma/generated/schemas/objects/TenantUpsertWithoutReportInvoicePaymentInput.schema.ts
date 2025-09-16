import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUpdateWithoutReportInvoicePaymentInput.schema';
import { TenantUncheckedUpdateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInvoicePaymentInput.schema';
import { TenantCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantCreateWithoutReportInvoicePaymentInput.schema';
import { TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoicePaymentInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInvoicePaymentInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutReportInvoicePaymentInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutReportInvoicePaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutReportInvoicePaymentInput>;
export const TenantUpsertWithoutReportInvoicePaymentInputObjectZodSchema = makeSchema();
