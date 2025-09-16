import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserSelectObjectSchema } from './TenantUserSelect.schema';
import { TenantUserIncludeObjectSchema } from './TenantUserInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantUserSelectObjectSchema).optional(),
  include: z.lazy(() => TenantUserIncludeObjectSchema).optional()
}).strict();
export const TenantUserArgsObjectSchema = makeSchema();
export const TenantUserArgsObjectZodSchema = makeSchema();
