import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageCountOutputTypeSelectObjectSchema } from './PageCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PageCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PageCountOutputTypeArgsObjectSchema = makeSchema();
export const PageCountOutputTypeArgsObjectZodSchema = makeSchema();
