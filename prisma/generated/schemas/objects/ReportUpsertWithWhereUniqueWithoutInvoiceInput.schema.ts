import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema';
import { ReportUpdateWithoutInvoiceInputObjectSchema } from './ReportUpdateWithoutInvoiceInput.schema';
import { ReportUncheckedUpdateWithoutInvoiceInputObjectSchema } from './ReportUncheckedUpdateWithoutInvoiceInput.schema';
import { ReportCreateWithoutInvoiceInputObjectSchema } from './ReportCreateWithoutInvoiceInput.schema';
import { ReportUncheckedCreateWithoutInvoiceInputObjectSchema } from './ReportUncheckedCreateWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportUpdateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUncheckedUpdateWithoutInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportCreateWithoutInvoiceInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutInvoiceInputObjectSchema)])
}).strict();
export const ReportUpsertWithWhereUniqueWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutInvoiceInput>;
export const ReportUpsertWithWhereUniqueWithoutInvoiceInputObjectZodSchema = makeSchema();
