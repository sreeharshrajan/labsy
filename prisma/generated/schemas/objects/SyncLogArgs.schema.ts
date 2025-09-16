import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogSelectObjectSchema } from './SyncLogSelect.schema';
import { SyncLogIncludeObjectSchema } from './SyncLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SyncLogSelectObjectSchema).optional(),
  include: z.lazy(() => SyncLogIncludeObjectSchema).optional()
}).strict();
export const SyncLogArgsObjectSchema = makeSchema();
export const SyncLogArgsObjectZodSchema = makeSchema();
