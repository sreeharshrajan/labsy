import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutInvoiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutInvoiceInput.schema';
import { ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateOrConnectWithoutInvoiceInput.schema';
import { ReportInvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema } from './ReportInvoiceItemCreateManyInvoiceInputEnvelope.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceItemCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput>;
export const ReportInvoiceItemUncheckedCreateNestedManyWithoutInvoiceInputObjectZodSchema = makeSchema();
