import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutAuditLogsInputObjectSchema } from './TenantUpdateWithoutAuditLogsInput.schema';
import { TenantUncheckedUpdateWithoutAuditLogsInputObjectSchema } from './TenantUncheckedUpdateWithoutAuditLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutAuditLogsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutAuditLogsInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutAuditLogsInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutAuditLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutAuditLogsInput>;
export const TenantUpdateToOneWithWhereWithoutAuditLogsInputObjectZodSchema = makeSchema();
