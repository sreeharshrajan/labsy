import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutReportInvoiceInputObjectSchema } from './TenantUpdateWithoutReportInvoiceInput.schema';
import { TenantUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInvoiceInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutReportInvoiceInput>;
export const TenantUpdateToOneWithWhereWithoutReportInvoiceInputObjectZodSchema = makeSchema();
