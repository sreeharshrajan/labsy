import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemWhereUniqueInputObjectSchema } from './ReportInvoiceItemWhereUniqueInput.schema';
import { ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemCreateWithoutInvoiceInput.schema';
import { ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceItemCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemCreateOrConnectWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemCreateOrConnectWithoutInvoiceInput>;
export const ReportInvoiceItemCreateOrConnectWithoutInvoiceInputObjectZodSchema = makeSchema();
