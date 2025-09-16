import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantUserRoleOrderByRelationAggregateInputObjectSchema } from './TenantUserRoleOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { ReportOrderByRelationAggregateInputObjectSchema } from './ReportOrderByRelationAggregateInput.schema';
import { ReportChangeLogOrderByRelationAggregateInputObjectSchema } from './ReportChangeLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  tenantRoles: z.lazy(() => TenantUserRoleOrderByRelationAggregateInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  Report: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional(),
  reportUpdates: z.lazy(() => ReportChangeLogOrderByRelationAggregateInputObjectSchema).optional(),
  collectedBy: z.lazy(() => ReportOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TenantUserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TenantUserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserOrderByWithRelationInput>;
export const TenantUserOrderByWithRelationInputObjectZodSchema = makeSchema();
