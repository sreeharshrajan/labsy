import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerSelectObjectSchema } from './CustomerSelect.schema';
import { CustomerIncludeObjectSchema } from './CustomerInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomerSelectObjectSchema).optional(),
  include: z.lazy(() => CustomerIncludeObjectSchema).optional()
}).strict();
export const CustomerArgsObjectSchema = makeSchema();
export const CustomerArgsObjectZodSchema = makeSchema();
