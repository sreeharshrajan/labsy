import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AuditLogCountOrderByAggregateInputObjectSchema } from './AuditLogCountOrderByAggregateInput.schema';
import { AuditLogMaxOrderByAggregateInputObjectSchema } from './AuditLogMaxOrderByAggregateInput.schema';
import { AuditLogMinOrderByAggregateInputObjectSchema } from './AuditLogMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  entity: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  entityId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ipAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userAgent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AuditLogCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AuditLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AuditLogMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AuditLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AuditLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogOrderByWithAggregationInput>;
export const AuditLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
