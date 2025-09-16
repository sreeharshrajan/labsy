import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceCreateWithoutCustomerInput.schema';
import { ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutCustomerInput.schema';
import { ReportInvoiceCreateOrConnectWithoutCustomerInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutCustomerInput.schema';
import { ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { ReportInvoiceCreateManyCustomerInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyCustomerInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { ReportInvoiceUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './ReportInvoiceUpdateManyWithWhereWithoutCustomerInput.schema';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutCustomerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceUpdateManyWithoutCustomerNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateManyWithoutCustomerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateManyWithoutCustomerNestedInput>;
export const ReportInvoiceUpdateManyWithoutCustomerNestedInputObjectZodSchema = makeSchema();
