import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportInvoiceCreateWithoutTenantInputObjectSchema } from './ReportInvoiceCreateWithoutTenantInput.schema';
import { ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema } from './ReportInvoiceUncheckedCreateWithoutTenantInput.schema';
import { ReportInvoiceCreateOrConnectWithoutTenantInputObjectSchema } from './ReportInvoiceCreateOrConnectWithoutTenantInput.schema';
import { ReportInvoiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportInvoiceUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ReportInvoiceCreateManyTenantInputEnvelopeObjectSchema } from './ReportInvoiceCreateManyTenantInputEnvelope.schema';
import { ReportInvoiceWhereUniqueInputObjectSchema } from './ReportInvoiceWhereUniqueInput.schema';
import { ReportInvoiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ReportInvoiceUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ReportInvoiceUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ReportInvoiceUpdateManyWithWhereWithoutTenantInput.schema';
import { ReportInvoiceScalarWhereInputObjectSchema } from './ReportInvoiceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportInvoiceCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportInvoiceCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportInvoiceCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema), z.lazy(() => ReportInvoiceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ReportInvoiceUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema), z.lazy(() => ReportInvoiceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReportInvoiceUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ReportInvoiceUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportInvoiceUpdateManyWithoutTenantNestedInput>;
export const ReportInvoiceUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
