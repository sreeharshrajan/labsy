import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationSelectObjectSchema } from './NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './NotificationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => NotificationSelectObjectSchema).optional(),
  include: z.lazy(() => NotificationIncludeObjectSchema).optional()
}).strict();
export const NotificationArgsObjectSchema = makeSchema();
export const NotificationArgsObjectZodSchema = makeSchema();
