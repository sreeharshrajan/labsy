import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCountOutputTypeSelectObjectSchema } from './TenantUserCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantUserCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TenantUserCountOutputTypeArgsObjectSchema = makeSchema();
export const TenantUserCountOutputTypeArgsObjectZodSchema = makeSchema();
