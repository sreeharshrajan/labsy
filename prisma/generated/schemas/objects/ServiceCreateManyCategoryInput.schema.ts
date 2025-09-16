import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  price: z.number(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string()
}).strict();
export const ServiceCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.ServiceCreateManyCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateManyCategoryInput>;
export const ServiceCreateManyCategoryInputObjectZodSchema = makeSchema();
