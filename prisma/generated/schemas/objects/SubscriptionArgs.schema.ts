import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionSelectObjectSchema } from './SubscriptionSelect.schema';
import { SubscriptionIncludeObjectSchema } from './SubscriptionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SubscriptionSelectObjectSchema).optional(),
  include: z.lazy(() => SubscriptionIncludeObjectSchema).optional()
}).strict();
export const SubscriptionArgsObjectSchema = makeSchema();
export const SubscriptionArgsObjectZodSchema = makeSchema();
