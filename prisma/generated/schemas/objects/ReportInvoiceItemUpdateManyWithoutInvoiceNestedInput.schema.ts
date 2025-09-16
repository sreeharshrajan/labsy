import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutInvoiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutInvoiceInput.schema';
import { ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateOrConnectWithoutInvoiceInput.schema';
import { ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput.schema';
import { ReportInvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema } from './ReportInvoiceItemCreateManyInvoiceInputEnvelope.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput.schema';
import { ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInput.schema';
import { ReportInvoiceItemScalarWhereInputObjectSchema } from './ReportInvoiceItemScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceItemUpdateManyWithoutInvoiceNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithoutInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithoutInvoiceNestedInput>;
export const ReportInvoiceItemUpdateManyWithoutInvoiceNestedInputObjectZodSchema = makeSchema();
