import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  action: z.boolean().optional(),
  metadata: z.boolean().optional(),
  entity: z.boolean().optional(),
  entityId: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  userId: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const AuditLogSelectObjectSchema: z.ZodType<Prisma.AuditLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogSelect>;
export const AuditLogSelectObjectZodSchema = makeSchema();
