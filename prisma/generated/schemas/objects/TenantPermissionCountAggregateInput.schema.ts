import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  action: z.literal(true).optional(),
  resource: z.literal(true).optional(),
  roleId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TenantPermissionCountAggregateInputObjectSchema: z.ZodType<Prisma.TenantPermissionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionCountAggregateInputType>;
export const TenantPermissionCountAggregateInputObjectZodSchema = makeSchema();
