import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  action: z.literal(true).optional(),
  resource: z.literal(true).optional(),
  roleId: z.literal(true).optional()
}).strict();
export const TenantPermissionMaxAggregateInputObjectSchema: z.ZodType<Prisma.TenantPermissionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionMaxAggregateInputType>;
export const TenantPermissionMaxAggregateInputObjectZodSchema = makeSchema();
