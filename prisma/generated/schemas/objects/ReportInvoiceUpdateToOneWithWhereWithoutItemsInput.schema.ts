import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ReportInvoiceUpdateWithoutItemsInputObjectSchema } from './ReportInvoiceUpdateWithoutItemsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutItemsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutItemsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateToOneWithWhereWithoutItemsInput>;
export const ReportInvoiceUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
