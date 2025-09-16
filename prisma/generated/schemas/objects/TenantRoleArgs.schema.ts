import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleSelectObjectSchema } from './TenantRoleSelect.schema';
import { TenantRoleIncludeObjectSchema } from './TenantRoleInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantRoleSelectObjectSchema).optional(),
  include: z.lazy(() => TenantRoleIncludeObjectSchema).optional()
}).strict();
export const TenantRoleArgsObjectSchema = makeSchema();
export const TenantRoleArgsObjectZodSchema = makeSchema();
