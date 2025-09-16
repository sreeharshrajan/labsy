import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateWithoutReportInvoiceInputObjectSchema } from './CustomerCreateWithoutReportInvoiceInput.schema';
import { CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './CustomerUncheckedCreateWithoutReportInvoiceInput.schema';
import { CustomerCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './CustomerCreateOrConnectWithoutReportInvoiceInput.schema';
import { CustomerUpsertWithoutReportInvoiceInputObjectSchema } from './CustomerUpsertWithoutReportInvoiceInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema } from './CustomerUpdateToOneWithWhereWithoutReportInvoiceInput.schema';
import { CustomerUpdateWithoutReportInvoiceInputObjectSchema } from './CustomerUpdateWithoutReportInvoiceInput.schema';
import { CustomerUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './CustomerUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutReportInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomerUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]).optional()
}).strict();
export const CustomerUpdateOneRequiredWithoutReportInvoiceNestedInputObjectSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutReportInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutReportInvoiceNestedInput>;
export const CustomerUpdateOneRequiredWithoutReportInvoiceNestedInputObjectZodSchema = makeSchema();
