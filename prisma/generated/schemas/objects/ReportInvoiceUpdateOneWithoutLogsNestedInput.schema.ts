import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutLogsInputObjectSchema } from './ReportInvoiceCreateWithoutLogsInput.schema';
import { ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutLogsInput.schema';
import { ReportInvoiceCreateOrConnectWithoutLogsInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutLogsInput.schema';
import { ReportInvoiceUpsertWithoutLogsInputObjectSchema } from './ReportInvoiceUpsertWithoutLogsInput.schema';
import { ReportInvoiceWhereInputObjectSchema } from './ReportInvoiceWhereInput.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateToOneWithWhereWithoutLogsInputObjectSchema } from './ReportInvoiceUpdateToOneWithWhereWithoutLogsInput.schema';
import { ReportInvoiceUpdateWithoutLogsInputObjectSchema } from './ReportInvoiceUpdateWithoutLogsInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutLogsInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReportInvoiceCreateOrConnectWithoutLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReportInvoiceUpsertWithoutLogsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReportInvoiceWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReportInvoiceWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateToOneWithWhereWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithoutLogsInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutLogsInputObjectSchema)]).optional()
}).strict();
export const ReportInvoiceUpdateOneWithoutLogsNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateOneWithoutLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateOneWithoutLogsNestedInput>;
export const ReportInvoiceUpdateOneWithoutLogsNestedInputObjectZodSchema = makeSchema();
