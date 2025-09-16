import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemScalarWhereInputObjectSchema } from './ReportInvoiceItemScalarWhereInput.schema';
import { ReportInvoiceItemUpdateManyMutationInputObjectSchema } from './ReportInvoiceItemUpdateManyMutationInput.schema';
import { ReportInvoiceItemUncheckedUpdateManyWithoutInvoiceInputObjectSchema } from './ReportInvoiceItemUncheckedUpdateManyWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceItemUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedUpdateManyWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInput>;
export const ReportInvoiceItemUpdateManyWithWhereWithoutInvoiceInputObjectZodSchema = makeSchema();
