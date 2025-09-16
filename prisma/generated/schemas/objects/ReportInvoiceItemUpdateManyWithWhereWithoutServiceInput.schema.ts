import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceItemScalarWhereInputObjectSchema } from './ReportInvoiceItemScalarWhereInput.schema';
import { ReportInvoiceItemUpdateManyMutationInputObjectSchema } from './ReportInvoiceItemUpdateManyMutationInput.schema';
import { ReportInvoiceItemUncheckedUpdateManyWithoutServiceInputObjectSchema } from './ReportInvoiceItemUncheckedUpdateManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceItemUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoiceItemUncheckedUpdateManyWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceItemUpdateManyWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithWhereWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceItemUpdateManyWithWhereWithoutServiceInput>;
export const ReportInvoiceItemUpdateManyWithWhereWithoutServiceInputObjectZodSchema = makeSchema();
