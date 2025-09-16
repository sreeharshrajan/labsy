import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportCreateWithoutInvoiceInputObjectSchema } from './ReportCreateWithoutInvoiceInput.schema';
import { ReportUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportCreateOrConnectWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportCreateOrConnectWithoutInvoiceInput>;
export const ReportCreateOrConnectWithoutInvoiceInputObjectZodSchema = makeSchema();
