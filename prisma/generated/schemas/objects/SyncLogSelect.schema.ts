import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  entity: z.boolean().optional(),
  entityId: z.boolean().optional(),
  details: z.boolean().optional(),
  status: z.boolean().optional(),
  operation: z.boolean().optional(),
  syncedAt: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional()
}).strict();
export const SyncLogSelectObjectSchema: z.ZodType<Prisma.SyncLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogSelect>;
export const SyncLogSelectObjectZodSchema = makeSchema();
