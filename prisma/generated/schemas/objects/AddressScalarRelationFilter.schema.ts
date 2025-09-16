import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AddressWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AddressWhereInputObjectSchema).optional()
}).strict();
export const AddressScalarRelationFilterObjectSchema: z.ZodType<Prisma.AddressScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AddressScalarRelationFilter>;
export const AddressScalarRelationFilterObjectZodSchema = makeSchema();
