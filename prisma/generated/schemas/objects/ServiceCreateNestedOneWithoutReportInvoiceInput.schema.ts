import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportInvoiceInputObjectSchema } from './ServiceCreateWithoutReportInvoiceInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceInput.schema';
import { ServiceCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './ServiceCreateOrConnectWithoutReportInvoiceInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServiceCreateNestedOneWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateNestedOneWithoutReportInvoiceInput>;
export const ServiceCreateNestedOneWithoutReportInvoiceInputObjectZodSchema = makeSchema();
