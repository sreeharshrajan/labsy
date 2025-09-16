import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateOrConnectWithoutInvoiceInput.schema';
import { ReportInvoicePaymentCreateManyInvoiceInputEnvelopeObjectSchema } from './ReportInvoicePaymentCreateManyInvoiceInputEnvelope.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoicePaymentCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoicePaymentCreateNestedManyWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentCreateNestedManyWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentCreateNestedManyWithoutInvoiceInput>;
export const ReportInvoicePaymentCreateNestedManyWithoutInvoiceInputObjectZodSchema = makeSchema();
