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
  tenantId: z.string(),
  categoryId: z.string().optional().nullable()
}).strict();
export const ServiceCreateManyInputObjectSchema: z.ZodType<Prisma.ServiceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCreateManyInput>;
export const ServiceCreateManyInputObjectZodSchema = makeSchema();
