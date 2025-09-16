import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  entity: SortOrderSchema.optional(),
  entityId: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  syncedAt: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SyncLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SyncLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogOrderByWithRelationInput>;
export const SyncLogOrderByWithRelationInputObjectZodSchema = makeSchema();
