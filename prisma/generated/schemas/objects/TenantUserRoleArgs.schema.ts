import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleSelectObjectSchema } from './TenantUserRoleSelect.schema';
import { TenantUserRoleIncludeObjectSchema } from './TenantUserRoleInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantUserRoleSelectObjectSchema).optional(),
  include: z.lazy(() => TenantUserRoleIncludeObjectSchema).optional()
}).strict();
export const TenantUserRoleArgsObjectSchema = makeSchema();
export const TenantUserRoleArgsObjectZodSchema = makeSchema();
