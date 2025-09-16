import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceCreateWithoutPaymentsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutPaymentsInput.schema';
import { ReportInvoiceCreateOrConnectWithoutPaymentsInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutPaymentsInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutPaymentsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportInvoiceCreateNestedOneWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutPaymentsInput>;
export const ReportInvoiceCreateNestedOneWithoutPaymentsInputObjectZodSchema = makeSchema();
