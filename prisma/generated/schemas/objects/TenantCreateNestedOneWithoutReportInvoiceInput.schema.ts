import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportInvoiceInputObjectSchema } from './TenantCreateWithoutReportInvoiceInput.schema';
import { TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoiceInput.schema';
import { TenantCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './TenantCreateOrConnectWithoutReportInvoiceInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutReportInvoiceInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutReportInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutReportInvoiceInput>;
export const TenantCreateNestedOneWithoutReportInvoiceInputObjectZodSchema = makeSchema();
