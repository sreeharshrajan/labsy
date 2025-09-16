import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantPermissionOrderByRelationAggregateInputObjectSchema } from './TenantPermissionOrderByRelationAggregateInput.schema';
import { SystemRoleTemplateOrderByWithRelationInputObjectSchema } from './SystemRoleTemplateOrderByWithRelationInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { TenantUserRoleOrderByRelationAggregateInputObjectSchema } from './TenantUserRoleOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSystem: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  systemRoleTemplateId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenantId: SortOrderSchema.optional(),
  permissions: z.lazy(() => TenantPermissionOrderByRelationAggregateInputObjectSchema).optional(),
  systemRoleTemplate: z.lazy(() => SystemRoleTemplateOrderByWithRelationInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  TenantUserRole: z.lazy(() => TenantUserRoleOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TenantRoleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantRoleOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleOrderByWithRelationInput>;
export const TenantRoleOrderByWithRelationInputObjectZodSchema = makeSchema();
