import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleArgsObjectSchema } from './TenantRoleArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  action: z.boolean().optional(),
  resource: z.boolean().optional(),
  roleId: z.boolean().optional(),
  role: z.union([z.boolean(), z.lazy(() => TenantRoleArgsObjectSchema)]).optional()
}).strict();
export const TenantPermissionSelectObjectSchema: z.ZodType<Prisma.TenantPermissionSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionSelect>;
export const TenantPermissionSelectObjectZodSchema = makeSchema();
