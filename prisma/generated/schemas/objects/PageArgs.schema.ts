import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageSelectObjectSchema } from './PageSelect.schema';
import { PageIncludeObjectSchema } from './PageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PageSelectObjectSchema).optional(),
  include: z.lazy(() => PageIncludeObjectSchema).optional()
}).strict();
export const PageArgsObjectSchema = makeSchema();
export const PageArgsObjectZodSchema = makeSchema();
