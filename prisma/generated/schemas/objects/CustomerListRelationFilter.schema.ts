import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  some: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  none: z.lazy(() => CustomerWhereInputObjectSchema).optional()
}).strict();
export const CustomerListRelationFilterObjectSchema: z.ZodType<Prisma.CustomerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomerListRelationFilter>;
export const CustomerListRelationFilterObjectZodSchema = makeSchema();
