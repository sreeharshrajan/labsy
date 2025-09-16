import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutReportInvoiceInputObjectSchema } from './CustomerCreateWithoutReportInvoiceInput.schema';
import { CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutReportInvoiceInput>;
export const CustomerCreateOrConnectWithoutReportInvoiceInputObjectZodSchema = makeSchema();
