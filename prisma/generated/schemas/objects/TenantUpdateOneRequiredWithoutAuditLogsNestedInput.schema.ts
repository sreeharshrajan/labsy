import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutAuditLogsInputObjectSchema } from './TenantCreateWithoutAuditLogsInput.schema';
import { TenantUncheckedCreateWithoutAuditLogsInputObjectSchema } from './TenantUncheckedCreateWithoutAuditLogsInput.schema';
import { TenantCreateOrConnectWithoutAuditLogsInputObjectSchema } from './TenantCreateOrConnectWithoutAuditLogsInput.schema';
import { TenantUpsertWithoutAuditLogsInputObjectSchema } from './TenantUpsertWithoutAuditLogsInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutAuditLogsInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutAuditLogsInput.schema';
import { TenantUpdateWithoutAuditLogsInputObjectSchema } from './TenantUpdateWithoutAuditLogsInput.schema';
import { TenantUncheckedUpdateWithoutAuditLogsInputObjectSchema } from './TenantUncheckedUpdateWithoutAuditLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutAuditLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutAuditLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutAuditLogsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUpdateWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutAuditLogsInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutAuditLogsNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutAuditLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutAuditLogsNestedInput>;
export const TenantUpdateOneRequiredWithoutAuditLogsNestedInputObjectZodSchema = makeSchema();
