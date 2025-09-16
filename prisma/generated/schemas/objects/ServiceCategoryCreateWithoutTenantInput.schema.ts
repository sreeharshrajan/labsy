import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  services: z.lazy(() => ServiceCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ServiceCategoryCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateWithoutTenantInput>;
export const ServiceCategoryCreateWithoutTenantInputObjectZodSchema = makeSchema();
