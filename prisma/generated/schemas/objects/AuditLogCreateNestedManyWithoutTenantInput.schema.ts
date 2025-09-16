import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogCreateWithoutTenantInputObjectSchema } from './AuditLogCreateWithoutTenantInput.schema';
import { AuditLogUncheckedCreateWithoutTenantInputObjectSchema } from './AuditLogUncheckedCreateWithoutTenantInput.schema';
import { AuditLogCreateOrConnectWithoutTenantInputObjectSchema } from './AuditLogCreateOrConnectWithoutTenantInput.schema';
import { AuditLogCreateManyTenantInputEnvelopeObjectSchema } from './AuditLogCreateManyTenantInputEnvelope.schema';
import { AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuditLogCreateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => AuditLogUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuditLogCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => AuditLogCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AuditLogCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.AuditLogCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateNestedManyWithoutTenantInput>;
export const AuditLogCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
