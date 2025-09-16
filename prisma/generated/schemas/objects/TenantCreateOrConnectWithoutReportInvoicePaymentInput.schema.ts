import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantCreateWithoutReportInvoicePaymentInput.schema';
import { TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoicePaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutReportInvoicePaymentInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutReportInvoicePaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutReportInvoicePaymentInput>;
export const TenantCreateOrConnectWithoutReportInvoicePaymentInputObjectZodSchema = makeSchema();
