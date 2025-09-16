import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantRoleOrderByRelationAggregateInputObjectSchema } from './TenantRoleOrderByRelationAggregateInput.schema';
import { SystemPermissionOrderByRelationAggregateInputObjectSchema } from './SystemPermissionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDefault: SortOrderSchema.optional(),
  tenantRoles: z.lazy(() => TenantRoleOrderByRelationAggregateInputObjectSchema).optional(),
  permissions: z.lazy(() => SystemPermissionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SystemRoleTemplateOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateOrderByWithRelationInput>;
export const SystemRoleTemplateOrderByWithRelationInputObjectZodSchema = makeSchema();
