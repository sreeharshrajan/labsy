import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceCreateWithoutTenantInputObjectSchema } from './ReportInvoiceCreateWithoutTenantInput.schema';
import { ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoiceCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateOrConnectWithoutTenantInput>;
export const ReportInvoiceCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
