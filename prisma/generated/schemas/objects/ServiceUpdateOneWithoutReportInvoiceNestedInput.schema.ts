import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateWithoutReportInvoiceInputObjectSchema } from './ServiceCreateWithoutReportInvoiceInput.schema';
import { ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './ServiceUncheckedCreateWithoutReportInvoiceInput.schema';
import { ServiceCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './ServiceCreateOrConnectWithoutReportInvoiceInput.schema';
import { ServiceUpsertWithoutReportInvoiceInputObjectSchema } from './ServiceUpsertWithoutReportInvoiceInput.schema';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema';
import { ServiceWhereUniqueInputObjectSchema } from './ServiceWhereUniqueInput.schema';
import { ServiceUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema } from './ServiceUpdateToOneWithWhereWithoutReportInvoiceInput.schema';
import { ServiceUpdateWithoutReportInvoiceInputObjectSchema } from './ServiceUpdateWithoutReportInvoiceInput.schema';
import { ServiceUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './ServiceUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServiceCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServiceCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  upsert: z.lazy(() => ServiceUpsertWithoutReportInvoiceInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ServiceWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ServiceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ServiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServiceUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => ServiceUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]).optional()
}).strict();
export const ServiceUpdateOneWithoutReportInvoiceNestedInputObjectSchema: z.ZodType<Prisma.ServiceUpdateOneWithoutReportInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceUpdateOneWithoutReportInvoiceNestedInput>;
export const ServiceUpdateOneWithoutReportInvoiceNestedInputObjectZodSchema = makeSchema();
