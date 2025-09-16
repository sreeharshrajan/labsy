import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema';
import { ReportInvoiceUpdateManyMutationInputObjectSchema } from './ReportInvoiceUpdateManyMutationInput.schema';
import { ReportInvoiceUncheckedUpdateManyWithoutServiceInputObjectSchema } from './ReportInvoiceUncheckedUpdateManyWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateManyWithoutServiceInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateManyWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutServiceInput>;
export const ReportInvoiceUpdateManyWithWhereWithoutServiceInputObjectZodSchema = makeSchema();
