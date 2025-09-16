import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportCreateWithoutTenantInputObjectSchema } from './ReportCreateWithoutTenantInput.schema';
import { ReportUncheckedCreateWithoutTenantInputObjectSchema } from './ReportUncheckedCreateWithoutTenantInput.schema';
import { ReportCreateOrConnectWithoutTenantInputObjectSchema } from './ReportCreateOrConnectWithoutTenantInput.schema';
import { ReportCreateManyTenantInputEnvelopeObjectSchema } from './ReportCreateManyTenantInputEnvelope.schema';
import { ReportWhereUniqueInputObjectSchema } from './ReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReportCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ReportUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ReportUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReportCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ReportCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReportCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReportWhereUniqueInputObjectSchema), z.lazy(() => ReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReportUncheckedCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUncheckedCreateNestedManyWithoutTenantInput>;
export const ReportUncheckedCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
