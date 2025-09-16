import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionFindManySchema } from '../findManyTenantPermission.schema';
import { SystemRoleTemplateArgsObjectSchema } from './SystemRoleTemplateArgs.schema';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { TenantUserRoleFindManySchema } from '../findManyTenantUserRole.schema';
import { TenantRoleCountOutputTypeArgsObjectSchema } from './TenantRoleCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  permissions: z.union([z.boolean(), z.lazy(() => TenantPermissionFindManySchema)]).optional(),
  systemRoleTemplate: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateArgsObjectSchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  TenantUserRole: z.union([z.boolean(), z.lazy(() => TenantUserRoleFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantRoleCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantRoleIncludeObjectSchema: z.ZodType<Prisma.TenantRoleInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleInclude>;
export const TenantRoleIncludeObjectZodSchema = makeSchema();
