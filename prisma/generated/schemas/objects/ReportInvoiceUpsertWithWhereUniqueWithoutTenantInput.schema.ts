import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutTenantInputObjectSchema } from './ReportInvoiceUpdateWithoutTenantInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutTenantInput.schema';
import { ReportInvoiceCreateWithoutTenantInputObjectSchema } from './ReportInvoiceCreateWithoutTenantInput.schema';
import { ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpsertWithWhereUniqueWithoutTenantInput>;
export const ReportInvoiceUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
