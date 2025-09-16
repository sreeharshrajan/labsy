import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentCreateWithoutTenantInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutTenantInput.schema';
import { ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectSchema } from './ReportInvoicePaymentCreateOrConnectWithoutTenantInput.schema';
import { ReportInvoicePaymentCreateManyTenantInputEnvelopeObjectSchema } from './ReportInvoicePaymentCreateManyTenantInputEnvelope.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoicePaymentCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoicePaymentCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateNestedManyWithoutTenantInput>;
export const ReportInvoicePaymentCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
