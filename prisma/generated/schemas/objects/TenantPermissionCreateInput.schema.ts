import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateNestedOneWithoutPermissionsInputObjectSchema } from './TenantRoleCreateNestedOneWithoutPermissionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string(),
  role: z.lazy(() => TenantRoleCreateNestedOneWithoutPermissionsInputObjectSchema)
}).strict();
export const TenantPermissionCreateInputObjectSchema: z.ZodType<Prisma.TenantPermissionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionCreateInput>;
export const TenantPermissionCreateInputObjectZodSchema = makeSchema();
