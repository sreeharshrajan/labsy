import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateWithoutReportInvoiceItemInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema)])
}).strict();
export const ServiceCreateOrConnectWithoutReportInvoiceItemInputObjectSchema: z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportInvoiceItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateOrConnectWithoutReportInvoiceItemInput>;
export const ServiceCreateOrConnectWithoutReportInvoiceItemInputObjectZodSchema = makeSchema();
