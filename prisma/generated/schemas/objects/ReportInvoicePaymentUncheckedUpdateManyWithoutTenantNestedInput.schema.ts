import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentCreateWithoutTenantInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutTenantInput.schema';
import { ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectSchema } from './ReportInvoicePaymentCreateOrConnectWithoutTenantInput.schema';
import { ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ReportInvoicePaymentCreateManyTenantInputEnvelopeObjectSchema } from './ReportInvoicePaymentCreateManyTenantInputEnvelope.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInput.schema';
import { ReportInvoicePaymentScalarWhereInputObjectSchema } from './ReportInvoicePaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoicePaymentCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoicePaymentUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema), z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoicePaymentUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUncheckedUpdateManyWithoutTenantNestedInput>;
export const ReportInvoicePaymentUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
