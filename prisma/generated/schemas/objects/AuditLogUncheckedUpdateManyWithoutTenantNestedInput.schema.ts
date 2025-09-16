import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogCreateWithoutTenantInputObjectSchema } from './AuditLogCreateWithoutTenantInput.schema';
import { AuditLogUncheckedCreateWithoutTenantInputObjectSchema } from './AuditLogUncheckedCreateWithoutTenantInput.schema';
import { AuditLogCreateOrConnectWithoutTenantInputObjectSchema } from './AuditLogCreateOrConnectWithoutTenantInput.schema';
import { AuditLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './AuditLogUpsertWithWhereUniqueWithoutTenantInput.schema';
import { AuditLogCreateManyTenantInputEnvelopeObjectSchema } from './AuditLogCreateManyTenantInputEnvelope.schema';
import { AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './AuditLogUpdateWithWhereUniqueWithoutTenantInput.schema';
import { AuditLogUpdateManyWithWhereWithoutTenantInputObjectSchema } from './AuditLogUpdateManyWithWhereWithoutTenantInput.schema';
import { AuditLogScalarWhereInputObjectSchema } from './AuditLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuditLogCreateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => AuditLogUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuditLogCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => AuditLogCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AuditLogUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AuditLogScalarWhereInputObjectSchema), z.lazy(() => AuditLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AuditLogUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.AuditLogUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUncheckedUpdateManyWithoutTenantNestedInput>;
export const AuditLogUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
