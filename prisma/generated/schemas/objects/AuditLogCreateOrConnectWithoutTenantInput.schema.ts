import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogCreateWithoutTenantInputObjectSchema } from './AuditLogCreateWithoutTenantInput.schema';
import { AuditLogUncheckedCreateWithoutTenantInputObjectSchema } from './AuditLogUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AuditLogCreateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const AuditLogCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.AuditLogCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateOrConnectWithoutTenantInput>;
export const AuditLogCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
