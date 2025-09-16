import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceCreateWithoutReportInvoiceInputObjectSchema } from './ServiceCreateWithoutReportInvoiceInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const ServiceCreateOrConnectWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportInvoiceInput>;
export const ServiceCreateOrConnectWithoutReportInvoiceInputObjectZodSchema = makeSchema();
