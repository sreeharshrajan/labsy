import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageContentSelectObjectSchema } from './PageContentSelect.schema';
import { PageContentIncludeObjectSchema } from './PageContentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PageContentSelectObjectSchema).optional(),
  include: z.lazy(() => PageContentIncludeObjectSchema).optional()
}).strict();
export const PageContentArgsObjectSchema = makeSchema();
export const PageContentArgsObjectZodSchema = makeSchema();
