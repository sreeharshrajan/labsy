import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateWithoutReportInvoiceInputObjectSchema } from './CustomerUpdateWithoutReportInvoiceInput.schema';
import { CustomerUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './CustomerUncheckedUpdateWithoutReportInvoiceInput.schema';
import { CustomerCreateWithoutReportInvoiceInputObjectSchema } from './CustomerCreateWithoutReportInvoiceInput.schema';
import { CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInvoiceInput.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomerUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema)]),
  where: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerUpsertWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithoutReportInvoiceInput>;
export const CustomerUpsertWithoutReportInvoiceInputObjectZodSchema = makeSchema();
