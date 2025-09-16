import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutTenantInputObjectSchema } from './ReportInvoiceCreateWithoutTenantInput.schema';
import { ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutTenantInput.schema';
import { ReportInvoiceCreateOrConnectWithoutTenantInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutTenantInput.schema';
import { ReportInvoiceCreateManyTenantInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyTenantInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportInvoiceCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceCreateNestedManyWithoutTenantInput>;
export const ReportInvoiceCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
