import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  tenantUserId: z.literal(true).optional(),
  roleId: z.literal(true).optional()
}).strict();
export const TenantUserRoleMinAggregateInputObjectSchema: z.ZodType<Prisma.TenantUserRoleMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleMinAggregateInputType>;
export const TenantUserRoleMinAggregateInputObjectZodSchema = makeSchema();
