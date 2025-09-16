import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionSelectObjectSchema } from './TenantPermissionSelect.schema';
import { TenantPermissionIncludeObjectSchema } from './TenantPermissionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantPermissionSelectObjectSchema).optional(),
  include: z.lazy(() => TenantPermissionIncludeObjectSchema).optional()
}).strict();
export const TenantPermissionArgsObjectSchema = makeSchema();
export const TenantPermissionArgsObjectZodSchema = makeSchema();
