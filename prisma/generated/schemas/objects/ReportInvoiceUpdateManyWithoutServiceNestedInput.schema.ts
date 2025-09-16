import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutServiceInputObjectSchema } from './ReportInvoiceCreateWithoutServiceInput.schema';
import { ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutServiceInput.schema';
import { ReportInvoiceCreateOrConnectWithoutServiceInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutServiceInput.schema';
import { ReportInvoiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportInvoiceUpsertWithWhereUniqueWithoutServiceInput.schema';
import { ReportInvoiceCreateManyServiceInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyServiceInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportInvoiceUpdateWithWhereUniqueWithoutServiceInput.schema';
import { ReportInvoiceUpdateManyWithWhereWithoutServiceInputObjectSchema } from './ReportInvoiceUpdateManyWithWhereWithoutServiceInput.schema';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyServiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutServiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceUpdateManyWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateManyWithoutServiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateManyWithoutServiceNestedInput>;
export const ReportInvoiceUpdateManyWithoutServiceNestedInputObjectZodSchema = makeSchema();
