import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  isSystem: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  systemRoleTemplateId: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TenantRoleCountAggregateInputObjectSchema: z.ZodType<Prisma.TenantRoleCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCountAggregateInputType>;
export const TenantRoleCountAggregateInputObjectZodSchema = makeSchema();
