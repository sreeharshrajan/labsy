import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleFindManySchema } from '../findManyTenantRole.schema';
import { SystemPermissionFindManySchema } from '../findManySystemPermission.schema';
import { SystemRoleTemplateCountOutputTypeArgsObjectSchema } from './SystemRoleTemplateCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenantRoles: z.union([z.boolean(), z.lazy(() => TenantRoleFindManySchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => SystemPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SystemRoleTemplateIncludeObjectSchema: z.ZodType<Prisma.SystemRoleTemplateInclude> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateInclude>;
export const SystemRoleTemplateIncludeObjectZodSchema = makeSchema();
