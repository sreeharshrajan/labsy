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
  tenantId: z.literal(true).optional()
}).strict();
export const TenantRoleMaxAggregateInputObjectSchema: z.ZodType<Prisma.TenantRoleMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleMaxAggregateInputType>;
export const TenantRoleMaxAggregateInputObjectZodSchema = makeSchema();
