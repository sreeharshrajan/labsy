import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceUpdateWithoutItemsInputObjectSchema } from './ReportInvoiceUpdateWithoutItemsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutItemsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutItemsInput.schema';
import { ReportInvoiceCreateWithoutItemsInputObjectSchema } from './ReportInvoiceCreateWithoutItemsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutItemsInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutItemsInputObjectSchema)]),
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional()
}).strict();
export const ReportInvoiceUpsertWithoutItemsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithoutItemsInput>;
export const ReportInvoiceUpsertWithoutItemsInputObjectZodSchema = makeSchema();
