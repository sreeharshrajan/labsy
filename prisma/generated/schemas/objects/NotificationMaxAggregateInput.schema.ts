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
  createdAt: z.literal(true).optional(),
  readAt: z.literal(true).optional()
}).strict();
export const NotificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMaxAggregateInputType>;
export const NotificationMaxAggregateInputObjectZodSchema = makeSchema();
