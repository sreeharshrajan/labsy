import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const ServiceCategoryUncheckedCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutTenantInput>;
export const ServiceCategoryUncheckedCreateWithoutTenantInputObjectZodSchema = makeSchema();
