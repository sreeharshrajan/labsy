import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutAuditLogsInputObjectSchema } from './TenantUpdateWithoutAuditLogsInput.schema';
import { TenantUncheckedUpdateWithoutAuditLogsInputObjectSchema } from './TenantUncheckedUpdateWithoutAuditLogsInput.schema';
import { TenantCreateWithoutAuditLogsInputObjectSchema } from './TenantCreateWithoutAuditLogsInput.schema';
import { TenantUncheckedCreateWithoutAuditLogsInputObjectSchema } from './TenantUncheckedCreateWithoutAuditLogsInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutAuditLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutAuditLogsInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutAuditLogsInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutAuditLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutAuditLogsInput>;
export const TenantUpsertWithoutAuditLogsInputObjectZodSchema = makeSchema();
