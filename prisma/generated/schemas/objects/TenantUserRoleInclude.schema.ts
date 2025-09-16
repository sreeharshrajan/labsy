import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserArgsObjectSchema } from './TenantUserArgs.schema';
import { TenantRoleArgsObjectSchema } from './TenantRoleArgs.schema'

const makeSchema = () => z.object({
  tenantUser: z.union([z.boolean(), z.lazy(() => TenantUserArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => TenantRoleArgsObjectSchema)]).optional()
}).strict();
export const TenantUserRoleIncludeObjectSchema: z.ZodType<Prisma.TenantUserRoleInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleInclude>;
export const TenantUserRoleIncludeObjectZodSchema = makeSchema();
