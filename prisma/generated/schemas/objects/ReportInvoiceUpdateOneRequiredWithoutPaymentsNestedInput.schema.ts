import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceCreateWithoutPaymentsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutPaymentsInput.schema';
import { ReportInvoiceCreateOrConnectWithoutPaymentsInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutPaymentsInput.schema';
import { ReportInvoiceUpsertWithoutPaymentsInputObjectSchema } from './ReportInvoiceUpsertWithoutPaymentsInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateToOneWithWhereWithoutPaymentsInputObjectSchema } from './ReportInvoiceUpdateToOneWithWhereWithoutPaymentsInput.schema';
import { ReportInvoiceUpdateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUpdateWithoutPaymentsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportInvoiceUpsertWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateToOneWithWhereWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutPaymentsInputObjectSchema)]).optional()
}).strict();
export const ReportInvoiceUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateOneRequiredWithoutPaymentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateOneRequiredWithoutPaymentsNestedInput>;
export const ReportInvoiceUpdateOneRequiredWithoutPaymentsNestedInputObjectZodSchema = makeSchema();
