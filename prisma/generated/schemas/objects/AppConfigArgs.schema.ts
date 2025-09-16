import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppConfigSelectObjectSchema } from './AppConfigSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AppConfigSelectObjectSchema).optional()
}).strict();
export const AppConfigArgsObjectSchema = makeSchema();
export const AppConfigArgsObjectZodSchema = makeSchema();
