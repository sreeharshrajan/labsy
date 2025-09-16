import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutAuditLogsInputObjectSchema } from './TenantCreateWithoutAuditLogsInput.schema';
import { TenantUncheckedCreateWithoutAuditLogsInputObjectSchema } from './TenantUncheckedCreateWithoutAuditLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutAuditLogsInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutAuditLogsInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutAuditLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutAuditLogsInput>;
export const TenantCreateOrConnectWithoutAuditLogsInputObjectZodSchema = makeSchema();
