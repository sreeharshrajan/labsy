import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ServiceUpdateWithoutReportInvoiceInputObjectSchema } from './ServiceUpdateWithoutReportInvoiceInput.schema';
import { ServiceUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServiceUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const ServiceUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportInvoiceInput>;
export const ServiceUpdateToOneWithWhereWithoutReportInvoiceInputObjectZodSchema = makeSchema();
