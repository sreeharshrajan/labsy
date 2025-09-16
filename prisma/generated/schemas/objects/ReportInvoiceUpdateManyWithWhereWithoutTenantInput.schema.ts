import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema';
import { ReportInvoiceUpdateManyMutationInputObjectSchema } from './ReportInvoiceUpdateManyMutationInput.schema';
import { ReportInvoiceUncheckedUpdateManyWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportInvoiceUpdateManyMutationInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const ReportInvoiceUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateManyWithWhereWithoutTenantInput>;
export const ReportInvoiceUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
