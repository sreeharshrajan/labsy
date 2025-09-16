import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCountOutputTypeSelectObjectSchema } from './TenantRoleCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantRoleCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TenantRoleCountOutputTypeArgsObjectSchema = makeSchema();
export const TenantRoleCountOutputTypeArgsObjectZodSchema = makeSchema();
