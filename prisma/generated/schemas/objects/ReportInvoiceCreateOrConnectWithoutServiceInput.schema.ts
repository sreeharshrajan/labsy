import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutServiceInputObjectSchema } from './ReportInvoiceCreateWithoutServiceInput.schema';
import { ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutServiceInput>;
export const ReportInvoiceCreateOrConnectWithoutServiceInputObjectZodSchema = makeSchema();
