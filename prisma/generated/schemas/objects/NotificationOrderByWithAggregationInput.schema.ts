import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NotificationCountOrderByAggregateInputObjectSchema } from './NotificationCountOrderByAggregateInput.schema';
import { NotificationMaxOrderByAggregateInputObjectSchema } from './NotificationMaxOrderByAggregateInput.schema';
import { NotificationMinOrderByAggregateInputObjectSchema } from './NotificationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  isRead: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  readAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => NotificationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NotificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NotificationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NotificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationOrderByWithAggregationInput>;
export const NotificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
