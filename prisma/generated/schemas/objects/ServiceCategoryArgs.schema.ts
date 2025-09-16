import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategorySelectObjectSchema } from './ServiceCategorySelect.schema';
import { ServiceCategoryIncludeObjectSchema } from './ServiceCategoryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ServiceCategorySelectObjectSchema).optional(),
  include: z.lazy(() => ServiceCategoryIncludeObjectSchema).optional()
}).strict();
export const ServiceCategoryArgsObjectSchema = makeSchema();
export const ServiceCategoryArgsObjectZodSchema = makeSchema();
