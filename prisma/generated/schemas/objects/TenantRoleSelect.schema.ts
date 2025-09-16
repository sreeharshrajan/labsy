import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionFindManySchema } from '../findManyTenantPermission.schema';
import { SystemRoleTemplateArgsObjectSchema } from './SystemRoleTemplateArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { TenantUserRoleFindManySchema } from '../findManyTenantUserRole.schema';
import { TenantRoleCountOutputTypeArgsObjectSchema } from './TenantRoleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isSystem: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  permissions: z.union([z.boolean(), z.lazy(() => TenantPermissionFindManySchema)]).optional(),
  systemRoleTemplateId: z.boolean().optional(),
  systemRoleTemplate: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateArgsObjectSchema)]).optional(),
  tenantId: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  TenantUserRole: z.union([z.boolean(), z.lazy(() => TenantUserRoleFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantRoleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantRoleSelectObjectSchema: z.ZodType<Prisma.TenantRoleSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleSelect>;
export const TenantRoleSelectObjectZodSchema = makeSchema();
