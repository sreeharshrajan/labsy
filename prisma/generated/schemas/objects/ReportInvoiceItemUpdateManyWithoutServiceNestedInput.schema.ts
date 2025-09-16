import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutServiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutServiceInput.schema';
import { ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectSchema } from './ReportInvoiceItemCreateOrConnectWithoutServiceInput.schema';
import { ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInput.schema';
import { ReportInvoiceItemCreateManyServiceInputEnvelopeObjectSchema } from './ReportInvoiceItemCreateManyServiceInputEnvelope.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInputObjectSchema } from './ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInput.schema';
import { ReportInvoiceItemUpdateManyWithWhereWithoutServiceInputObjectSchema } from './ReportInvoiceItemUpdateManyWithWhereWithoutServiceInput.schema';
import { ReportInvoiceItemScalarWhereInputObjectSchema } from './ReportInvoiceItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUpsertWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceItemCreateManyServiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUpdateWithWhereUniqueWithoutServiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoiceItemUpdateManyWithWhereWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUpdateManyWithWhereWithoutServiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceItemUpdateManyWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithoutServiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithoutServiceNestedInput>;
export const ReportInvoiceItemUpdateManyWithoutServiceNestedInputObjectZodSchema = makeSchema();
