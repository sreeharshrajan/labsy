import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogUpdateWithoutTenantInputObjectSchema } from './AuditLogUpdateWithoutTenantInput.schema';
import { AuditLogUncheckedUpdateWithoutTenantInputObjectSchema } from './AuditLogUncheckedUpdateWithoutTenantInput.schema';
import { AuditLogCreateWithoutTenantInputObjectSchema } from './AuditLogCreateWithoutTenantInput.schema';
import { AuditLogUncheckedCreateWithoutTenantInputObjectSchema } from './AuditLogUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AuditLogUpdateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => AuditLogCreateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const AuditLogUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.AuditLogUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpsertWithWhereUniqueWithoutTenantInput>;
export const AuditLogUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
