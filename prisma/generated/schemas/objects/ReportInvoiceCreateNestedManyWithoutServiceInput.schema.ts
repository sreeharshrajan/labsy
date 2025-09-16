import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutServiceInputObjectSchema } from './ReportInvoiceCreateWithoutServiceInput.schema';
import { ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutServiceInput.schema';
import { ReportInvoiceCreateOrConnectWithoutServiceInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutServiceInput.schema';
import { ReportInvoiceCreateManyServiceInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyServiceInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutServiceInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutServiceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyServiceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceCreateNestedManyWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateNestedManyWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateNestedManyWithoutServiceInput>;
export const ReportInvoiceCreateNestedManyWithoutServiceInputObjectZodSchema = makeSchema();
