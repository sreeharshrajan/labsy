import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateWithoutReportInvoiceItemInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceItemInput.schema';
import { ServiceCreateOrConnectWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateOrConnectWithoutReportInvoiceItemInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportInvoiceItemInputObjectSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServiceCreateNestedOneWithoutReportInvoiceItemInputObjectSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportInvoiceItemInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportInvoiceItemInput>;
export const ServiceCreateNestedOneWithoutReportInvoiceItemInputObjectZodSchema = makeSchema();
