import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  role: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  isDefault: z.literal(true).optional()
}).strict();
export const SystemRoleTemplateMinAggregateInputObjectSchema: z.ZodType<Prisma.SystemRoleTemplateMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SystemRoleTemplateMinAggregateInputType>;
export const SystemRoleTemplateMinAggregateInputObjectZodSchema = makeSchema();
