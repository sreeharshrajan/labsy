import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantUserOrderByWithRelationInputObjectSchema } from './TenantUserOrderByWithRelationInput.schema';
import { TenantRoleOrderByWithRelationInputObjectSchema } from './TenantRoleOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  tenantUserId: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional(),
  tenantUser: z.lazy(() => TenantUserOrderByWithRelationInputObjectSchema).optional(),
  role: z.lazy(() => TenantRoleOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TenantUserRoleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantUserRoleOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleOrderByWithRelationInput>;
export const TenantUserRoleOrderByWithRelationInputObjectZodSchema = makeSchema();
