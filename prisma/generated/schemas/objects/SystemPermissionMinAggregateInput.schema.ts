import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  action: z.literal(true).optional(),
  resource: z.literal(true).optional(),
  roleTemplateId: z.literal(true).optional()
}).strict();
export const SystemPermissionMinAggregateInputObjectSchema: z.ZodType<Prisma.SystemPermissionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionMinAggregateInputType>;
export const SystemPermissionMinAggregateInputObjectZodSchema = makeSchema();
