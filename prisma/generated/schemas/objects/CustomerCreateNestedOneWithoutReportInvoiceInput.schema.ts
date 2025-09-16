import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutReportInvoiceInputObjectSchema } from './CustomerCreateWithoutReportInvoiceInput.schema';
import { CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInvoiceInput.schema';
import { CustomerCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './CustomerCreateOrConnectWithoutReportInvoiceInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomerCreateNestedOneWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateNestedOneWithoutReportInvoiceInput>;
export const CustomerCreateNestedOneWithoutReportInvoiceInputObjectZodSchema = makeSchema();
