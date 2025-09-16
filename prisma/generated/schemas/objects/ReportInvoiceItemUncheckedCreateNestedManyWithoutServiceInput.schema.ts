import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutServiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutServiceInput.schema';
import { ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectSchema } from './ReportInvoiceItemCreateOrConnectWithoutServiceInput.schema';
import { ReportInvoiceItemCreateManyServiceInputEnvelopeObjectSchema } from './ReportInvoiceItemCreateManyServiceInputEnvelope.schema';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceItemCreateManyServiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInput>;
export const ReportInvoiceItemUncheckedCreateNestedManyWithoutServiceInputObjectZodSchema = makeSchema();
