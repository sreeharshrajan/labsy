import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithoutTenantInputObjectSchema } from './ReportInvoiceUpdateWithoutTenantInput.schema';
import { ReportInvoiceUncheckedUpdateWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateWithWhereUniqueWithoutTenantInput>;
export const ReportInvoiceUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
