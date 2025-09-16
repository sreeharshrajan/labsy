import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserArgsObjectSchema } from './TenantUserArgs.schema';
import { TenantRoleArgsObjectSchema } from './TenantRoleArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  tenantUserId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  tenantUser: z.union([z.boolean(), z.lazy(() => TenantUserArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => TenantRoleArgsObjectSchema)]).optional()
}).strict();
export const TenantUserRoleSelectObjectSchema: z.ZodType<Prisma.TenantUserRoleSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleSelect>;
export const TenantUserRoleSelectObjectZodSchema = makeSchema();
