import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUncheckedCreateWithoutInvoiceInput.schema';
import { ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentCreateOrConnectWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInput.schema';
import { ReportInvoicePaymentCreateManyInvoiceInputEnvelopeObjectSchema } from './ReportInvoicePaymentCreateManyInvoiceInputEnvelope.schema';
import { ReportInvoicePaymentWhereUniqueInputObjectSchema } from './ReportInvoicePaymentWhereUniqueInput.schema';
import { ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInput.schema';
import { ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInputObjectSchema } from './ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInput.schema';
import { ReportInvoicePaymentScalarWhereInputObjectSchema } from './ReportInvoicePaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoicePaymentCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoicePaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoicePaymentUpdateManyWithWhereWithoutInvoiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema), z.lazy(() => ReportInvoicePaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoicePaymentUncheckedUpdateManyWithoutInvoiceNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoicePaymentUncheckedUpdateManyWithoutInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoicePaymentUncheckedUpdateManyWithoutInvoiceNestedInput>;
export const ReportInvoicePaymentUncheckedUpdateManyWithoutInvoiceNestedInputObjectZodSchema = makeSchema();
