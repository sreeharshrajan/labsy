import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceWhereInputObjectSchema } from './ServiceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ServiceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ServiceWhereInputObjectSchema).optional().nullable()
}).strict();
export const ServiceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ServiceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ServiceNullableScalarRelationFilter>;
export const ServiceNullableScalarRelationFilterObjectZodSchema = makeSchema();
