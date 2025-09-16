import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantCreateWithoutReportInvoicePaymentInput.schema';
import { TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoicePaymentInput.schema';
import { TenantCreateOrConnectWithoutReportInvoicePaymentInputObjectSchema } from './TenantCreateOrConnectWithoutReportInvoicePaymentInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportInvoicePaymentInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutReportInvoicePaymentInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutReportInvoicePaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutReportInvoicePaymentInput>;
export const TenantCreateNestedOneWithoutReportInvoicePaymentInputObjectZodSchema = makeSchema();
