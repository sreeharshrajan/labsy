import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceCreateWithoutCustomerInput.schema';
import { ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutCustomerInput.schema';
import { ReportInvoiceCreateOrConnectWithoutCustomerInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutCustomerInput.schema';
import { ReportInvoiceCreateManyCustomerInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyCustomerInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceUncheckedCreateNestedManyWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUncheckedCreateNestedManyWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUncheckedCreateNestedManyWithoutCustomerInput>;
export const ReportInvoiceUncheckedCreateNestedManyWithoutCustomerInputObjectZodSchema = makeSchema();
