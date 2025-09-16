import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutLogsInputObjectSchema } from './ReportInvoiceCreateWithoutLogsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutLogsInput.schema';
import { ReportInvoiceCreateOrConnectWithoutLogsInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutLogsInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutLogsInputObjectSchema).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReportInvoiceCreateNestedOneWithoutLogsInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateNestedOneWithoutLogsInput>;
export const ReportInvoiceCreateNestedOneWithoutLogsInputObjectZodSchema = makeSchema();
