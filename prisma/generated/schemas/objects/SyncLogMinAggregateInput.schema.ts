import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  entity: z.literal(true).optional(),
  entityId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  operation: z.literal(true).optional(),
  syncedAt: z.literal(true).optional(),
  startedAt: z.literal(true).optional()
}).strict();
export const SyncLogMinAggregateInputObjectSchema: z.ZodType<Prisma.SyncLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogMinAggregateInputType>;
export const SyncLogMinAggregateInputObjectZodSchema = makeSchema();
