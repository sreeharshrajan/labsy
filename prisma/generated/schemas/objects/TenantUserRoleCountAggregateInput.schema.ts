import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  tenantUserId: z.literal(true).optional(),
  roleId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TenantUserRoleCountAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserRoleCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleCountAggregateInputType>;
export const TenantUserRoleCountAggregateInputObjectZodSchema = makeSchema();
