import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutReportInvoiceInputObjectSchema } from './TenantCreateWithoutReportInvoiceInput.schema';
import { TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutReportInvoiceInput>;
export const TenantCreateOrConnectWithoutReportInvoiceInputObjectZodSchema = makeSchema();
