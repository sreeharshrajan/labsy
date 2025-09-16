import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ServiceUpdateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUpdateWithoutReportInvoiceItemInput.schema';
import { ServiceUncheckedUpdateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportInvoiceItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServiceUpdateWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportInvoiceItemInputObjectSchema)])
}).strict();
export const ServiceUpdateToOneWithWhereWithoutReportInvoiceItemInputObjectSchema: z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportInvoiceItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateToOneWithWhereWithoutReportInvoiceItemInput>;
export const ServiceUpdateToOneWithWhereWithoutReportInvoiceItemInputObjectZodSchema = makeSchema();
