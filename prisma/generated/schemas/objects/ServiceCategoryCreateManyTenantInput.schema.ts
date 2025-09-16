import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string()
}).strict();
export const ServiceCategoryCreateManyTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateManyTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateManyTenantInput>;
export const ServiceCategoryCreateManyTenantInputObjectZodSchema = makeSchema();
