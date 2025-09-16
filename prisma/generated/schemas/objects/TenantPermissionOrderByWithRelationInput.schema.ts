import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantRoleOrderByWithRelationInputObjectSchema } from './TenantRoleOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional(),
  role: z.lazy(() => TenantRoleOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TenantPermissionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantPermissionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionOrderByWithRelationInput>;
export const TenantPermissionOrderByWithRelationInputObjectZodSchema = makeSchema();
