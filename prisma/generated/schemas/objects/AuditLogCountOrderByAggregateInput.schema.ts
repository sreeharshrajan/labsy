import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  metadata: SortOrderSchema.optional(),
  entity: SortOrderSchema.optional(),
  entityId: SortOrderSchema.optional(),
  ipAddress: SortOrderSchema.optional(),
  userAgent: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const AuditLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCountOrderByAggregateInput>;
export const AuditLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
