import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutServiceCategoryInputObjectSchema } from './TenantCreateNestedOneWithoutServiceCategoryInput.schema';
import { ServiceCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutServiceCategoryInputObjectSchema),
  services: z.lazy(() => ServiceCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const ServiceCategoryCreateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateInput>;
export const ServiceCategoryCreateInputObjectZodSchema = makeSchema();
