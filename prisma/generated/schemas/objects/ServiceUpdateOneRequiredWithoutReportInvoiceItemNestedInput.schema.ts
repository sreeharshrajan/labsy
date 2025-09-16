import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateWithoutReportInvoiceItemInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceItemInput.schema';
import { ServiceCreateOrConnectWithoutReportInvoiceItemInputObjectSchema } from './ServiceCreateOrConnectWithoutReportInvoiceItemInput.schema';
import { ServiceUpsertWithoutReportInvoiceItemInputObjectSchema } from './ServiceUpsertWithoutReportInvoiceItemInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateToOneWithWhereWithoutReportInvoiceItemInputObjectSchema } from './ServiceUpdateToOneWithWhereWithoutReportInvoiceItemInput.schema';
import { ServiceUpdateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUpdateWithoutReportInvoiceItemInput.schema';
import { ServiceUncheckedUpdateWithoutReportInvoiceItemInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportInvoiceItemInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportInvoiceItemInputObjectSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutReportInvoiceItemInputObjectSchema).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServiceUpdateToOneWithWhereWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUpdateWithoutReportInvoiceItemInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportInvoiceItemInputObjectSchema)]).optional()
}).strict();
export const ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInputObjectSchema: z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInput>;
export const ServiceUpdateOneRequiredWithoutReportInvoiceItemNestedInputObjectZodSchema = makeSchema();
