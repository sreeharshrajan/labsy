import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  action: z.literal(true).optional(),
  resource: z.literal(true).optional(),
  conditions: z.literal(true).optional(),
  roleTemplateId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SystemPermissionCountAggregateInputObjectSchema: z.ZodType<Prisma.SystemPermissionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionCountAggregateInputType>;
export const SystemPermissionCountAggregateInputObjectZodSchema = makeSchema();
