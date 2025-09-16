import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceSelectObjectSchema } from './ServiceSelect.schema';
import { ServiceIncludeObjectSchema } from './ServiceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ServiceSelectObjectSchema).optional(),
  include: z.lazy(() => ServiceIncludeObjectSchema).optional()
}).strict();
export const ServiceArgsObjectSchema = makeSchema();
export const ServiceArgsObjectZodSchema = makeSchema();
