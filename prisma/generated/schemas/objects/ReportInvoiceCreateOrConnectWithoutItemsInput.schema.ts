import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutItemsInputObjectSchema } from './ReportInvoiceCreateWithoutItemsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutItemsInput>;
export const ReportInvoiceCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
