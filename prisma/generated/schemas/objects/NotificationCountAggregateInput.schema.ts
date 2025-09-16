import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  title: z.literal(true).optional(),
  message: z.literal(true).optional(),
  isRead: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  readAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const NotificationCountAggregateInputObjectSchema: z.ZodType<Prisma.NotificationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCountAggregateInputType>;
export const NotificationCountAggregateInputObjectZodSchema = makeSchema();
