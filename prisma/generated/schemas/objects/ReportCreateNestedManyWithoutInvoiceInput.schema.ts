import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutInvoiceInputObjectSchema } from './ReportCreateWithoutInvoiceInput.schema';
import { ReportUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportUncheckedCreateWithoutInvoiceInput.schema';
import { ReportCreateOrConnectWithoutInvoiceInputObjectSchema } from './ReportCreateOrConnectWithoutInvoiceInput.schema';
import { ReportCreateManyInvoiceInputEnvelopeObjectSchema } from './ReportCreateManyInvoiceInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportCreateWithoutInvoiceInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutInvoiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutInvoiceInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutInvoiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyInvoiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportCreateNestedManyWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportCreateNestedManyWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateNestedManyWithoutInvoiceInput>;
export const ReportCreateNestedManyWithoutInvoiceInputObjectZodSchema = makeSchema();
