import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutServiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutServiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateOrConnectWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateOrConnectWithoutServiceInput>;
export const ReportInvoiceItemCreateOrConnectWithoutServiceInputObjectZodSchema = makeSchema();
