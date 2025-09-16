import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogUpdateWithoutTenantInputObjectSchema } from './AuditLogUpdateWithoutTenantInput.schema';
import { AuditLogUncheckedUpdateWithoutTenantInputObjectSchema } from './AuditLogUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AuditLogUpdateWithoutTenantInputObjectSchema), z.lazy(() => AuditLogUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const AuditLogUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutTenantInput>;
export const AuditLogUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
