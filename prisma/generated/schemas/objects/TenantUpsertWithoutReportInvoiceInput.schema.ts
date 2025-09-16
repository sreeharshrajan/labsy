import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutReportInvoiceInputObjectSchema } from './TenantUpdateWithoutReportInvoiceInput.schema';
import { TenantUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInvoiceInput.schema';
import { TenantCreateWithoutReportInvoiceInputObjectSchema } from './TenantCreateWithoutReportInvoiceInput.schema';
import { TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoiceInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutReportInvoiceInput>;
export const TenantUpsertWithoutReportInvoiceInputObjectZodSchema = makeSchema();
