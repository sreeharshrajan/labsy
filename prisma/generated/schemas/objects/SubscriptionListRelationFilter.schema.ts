import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionWhereInputObjectSchema } from './SubscriptionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SubscriptionWhereInputObjectSchema).optional(),
  some: z.lazy(() => SubscriptionWhereInputObjectSchema).optional(),
  none: z.lazy(() => SubscriptionWhereInputObjectSchema).optional()
}).strict();
export const SubscriptionListRelationFilterObjectSchema: z.ZodType<Prisma.SubscriptionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SubscriptionListRelationFilter>;
export const SubscriptionListRelationFilterObjectZodSchema = makeSchema();
