import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  tenantUserId: z.literal(true).optional(),
  roleId: z.literal(true).optional()
}).strict();
export const TenantUserRoleMaxAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserRoleMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleMaxAggregateInputType>;
export const TenantUserRoleMaxAggregateInputObjectZodSchema = makeSchema();
