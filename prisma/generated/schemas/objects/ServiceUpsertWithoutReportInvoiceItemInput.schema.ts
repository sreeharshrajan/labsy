import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUpdateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUpdateWithoutReportInvoiceItemInput.schema';
import { ServiceUncheckedUpdateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportInvoiceItemInput.schema';
import { ServiceCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateWithoutReportInvoiceItemInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceItemInput.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServiceUpdateWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportInvoiceItemInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema)]),
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional()
}).strict();
export const ServiceUpsertWithoutReportInvoiceItemInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithoutReportInvoiceItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithoutReportInvoiceItemInput>;
export const ServiceUpsertWithoutReportInvoiceItemInputObjectZodSchema = makeSchema();
