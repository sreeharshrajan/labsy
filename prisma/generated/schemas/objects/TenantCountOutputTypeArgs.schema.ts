import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCountOutputTypeSelectObjectSchema } from './TenantCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TenantCountOutputTypeArgsObjectSchema = makeSchema();
export const TenantCountOutputTypeArgsObjectZodSchema = makeSchema();
