import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantCreateWithoutReportInvoicePaymentInput.schema';
import { TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoicePaymentInput.schema';
import { TenantCreateOrConnectWithoutReportInvoicePaymentInputObjectSchema } from './TenantCreateOrConnectWithoutReportInvoicePaymentInput.schema';
import { TenantUpsertWithoutReportInvoicePaymentInputObjectSchema } from './TenantUpsertWithoutReportInvoicePaymentInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutReportInvoicePaymentInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutReportInvoicePaymentInput.schema';
import { TenantUpdateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUpdateWithoutReportInvoicePaymentInput.schema';
import { TenantUncheckedUpdateWithoutReportInvoicePaymentInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInvoicePaymentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoicePaymentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportInvoicePaymentInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutReportInvoicePaymentInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUpdateWithoutReportInvoicePaymentInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInvoicePaymentInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutReportInvoicePaymentNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportInvoicePaymentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportInvoicePaymentNestedInput>;
export const TenantUpdateOneRequiredWithoutReportInvoicePaymentNestedInputObjectZodSchema = makeSchema();
