import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional()
}).strict();
export const ServiceCategoryListRelationFilterObjectSchema: z.ZodType<Prisma.ServiceCategoryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryListRelationFilter>;
export const ServiceCategoryListRelationFilterObjectZodSchema = makeSchema();
