import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleFindManySchema } from '../findManyTenantRole.schema';
import { SystemPermissionFindManySchema } from '../findManySystemPermission.schema';
import { SystemRoleTemplateCountOutputTypeArgsObjectSchema } from './SystemRoleTemplateCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  tenantRoles: z.union([z.boolean(), z.lazy(() => TenantRoleFindManySchema)]).optional(),
  permissions: z.union([z.boolean(), z.lazy(() => SystemPermissionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SystemRoleTemplateCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SystemRoleTemplateSelectObjectSchema: z.ZodType<Prisma.SystemRoleTemplateSelect> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateSelect>;
export const SystemRoleTemplateSelectObjectZodSchema = makeSchema();
