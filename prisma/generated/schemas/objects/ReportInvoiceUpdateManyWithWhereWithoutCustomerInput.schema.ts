import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema';
import { ReportInvoiceUpdateManyMutationInputObjectSchema } from './ReportInvoiceUpdateManyMutationInput.schema';
import { ReportInvoiceUncheckedUpdateManyWithoutCustomerInputObjectSchema } from './ReportInvoiceUncheckedUpdateManyWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateManyWithoutCustomerInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateManyWithWhereWithoutCustomerInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutCustomerInput>;
export const ReportInvoiceUpdateManyWithWhereWithoutCustomerInputObjectZodSchema = makeSchema();
