import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutServiceCategoryInputObjectSchema } from './TenantCreateNestedOneWithoutServiceCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutServiceCategoryInputObjectSchema)
}).strict();
export const ServiceCategoryCreateWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryCreateWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCreateWithoutServicesInput>;
export const ServiceCategoryCreateWithoutServicesInputObjectZodSchema = makeSchema();
