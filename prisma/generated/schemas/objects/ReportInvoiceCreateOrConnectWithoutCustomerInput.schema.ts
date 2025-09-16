import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceCreateWithoutCustomerInput.schema';
import { ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutCustomerInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutCustomerInput>;
export const ReportInvoiceCreateOrConnectWithoutCustomerInputObjectZodSchema = makeSchema();
