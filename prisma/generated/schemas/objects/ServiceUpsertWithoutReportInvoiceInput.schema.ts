import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUpdateWithoutReportInvoiceInputObjectSchema } from './ServiceUpdateWithoutReportInvoiceInput.schema';
import { ServiceUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportInvoiceInput.schema';
import { ServiceCreateWithoutReportInvoiceInputObjectSchema } from './ServiceCreateWithoutReportInvoiceInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceInput.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServiceUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema)]),
  where: z.lazy(() => ServiceWhereInputObjectSchema).optional()
}).strict();
export const ServiceUpsertWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.ServiceUpsertWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpsertWithoutReportInvoiceInput>;
export const ServiceUpsertWithoutReportInvoiceInputObjectZodSchema = makeSchema();
