import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ServiceUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  tenantId: z.string(),
  services: z.lazy(() => ServiceUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const ServiceCategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedCreateInput>;
export const ServiceCategoryUncheckedCreateInputObjectZodSchema = makeSchema();
