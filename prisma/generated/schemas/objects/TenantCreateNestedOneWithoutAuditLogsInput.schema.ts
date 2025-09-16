import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutAuditLogsInputObjectSchema } from './TenantCreateWithoutAuditLogsInput.schema';
import { TenantUncheckedCreateWithoutAuditLogsInputObjectSchema } from './TenantUncheckedCreateWithoutAuditLogsInput.schema';
import { TenantCreateOrConnectWithoutAuditLogsInputObjectSchema } from './TenantCreateOrConnectWithoutAuditLogsInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutAuditLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutAuditLogsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutAuditLogsInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutAuditLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutAuditLogsInput>;
export const TenantCreateNestedOneWithoutAuditLogsInputObjectZodSchema = makeSchema();
