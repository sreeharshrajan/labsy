import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutReportInvoiceInputObjectSchema } from './TenantCreateWithoutReportInvoiceInput.schema';
import { TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema } from './TenantUncheckedCreateWithoutReportInvoiceInput.schema';
import { TenantCreateOrConnectWithoutReportInvoiceInputObjectSchema } from './TenantCreateOrConnectWithoutReportInvoiceInput.schema';
import { TenantUpsertWithoutReportInvoiceInputObjectSchema } from './TenantUpsertWithoutReportInvoiceInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutReportInvoiceInput.schema';
import { TenantUpdateWithoutReportInvoiceInputObjectSchema } from './TenantUpdateWithoutReportInvoiceInput.schema';
import { TenantUncheckedUpdateWithoutReportInvoiceInputObjectSchema } from './TenantUncheckedUpdateWithoutReportInvoiceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutReportInvoiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutReportInvoiceInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutReportInvoiceInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUpdateWithoutReportInvoiceInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutReportInvoiceInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutReportInvoiceNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportInvoiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutReportInvoiceNestedInput>;
export const TenantUpdateOneRequiredWithoutReportInvoiceNestedInputObjectZodSchema = makeSchema();
