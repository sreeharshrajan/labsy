import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutInvoiceInputObjectSchema } from './ReportCreateWithoutInvoiceInput.schema';
import { ReportUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportUncheckedCreateWithoutInvoiceInput.schema';
import { ReportCreateOrConnectWithoutInvoiceInputObjectSchema } from './ReportCreateOrConnectWithoutInvoiceInput.schema';
import { ReportUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema } from './ReportUpsertWithWhereUniqueWithoutInvoiceInput.schema';
import { ReportCreateManyInvoiceInputEnvelopeObjectSchema } from './ReportCreateManyInvoiceInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema } from './ReportUpdateWithWhereUniqueWithoutInvoiceInput.schema';
import { ReportUpdateManyWithWhereWithoutInvoiceInputObjectSchema } from './ReportUpdateManyWithWhereWithoutInvoiceInput.schema';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportUpdateManyWithWhereWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUpdateManyWithWhereWithoutInvoiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportScalarWhereInputObjectSchema), z.lazy(() => ReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportUpdateManyWithoutInvoiceNestedInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithoutInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithoutInvoiceNestedInput>;
export const ReportUpdateManyWithoutInvoiceNestedInputObjectZodSchema = makeSchema();
