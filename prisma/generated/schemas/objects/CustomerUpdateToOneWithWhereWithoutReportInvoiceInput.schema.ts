import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { CustomerUpdateWithoutReportInvoiceInputObjectSchema } from './CustomerUpdateWithoutReportInvoiceInput.schema';
import { CustomerUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './CustomerUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomerUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const CustomerUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutReportInvoiceInput>;
export const CustomerUpdateToOneWithWhereWithoutReportInvoiceInputObjectZodSchema = makeSchema();
