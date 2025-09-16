import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantOrderByWithRelationInputObjectSchema } from './TenantOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  entity: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  entityId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ipAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userAgent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AuditLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AuditLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogOrderByWithRelationInput>;
export const AuditLogOrderByWithRelationInputObjectZodSchema = makeSchema();
