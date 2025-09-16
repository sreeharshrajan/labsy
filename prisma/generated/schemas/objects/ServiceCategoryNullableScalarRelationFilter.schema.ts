import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCategoryWhereInputObjectSchema } from './ServiceCategoryWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ServiceCategoryWhereInputObjectSchema).optional().nullable()
}).strict();
export const ServiceCategoryNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServiceCategoryNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryNullableScalarRelationFilter>;
export const ServiceCategoryNullableScalarRelationFilterObjectZodSchema = makeSchema();
