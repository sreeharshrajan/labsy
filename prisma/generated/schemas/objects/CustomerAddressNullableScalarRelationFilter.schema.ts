import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressWhereInputObjectSchema } from './CustomerAddressWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CustomerAddressWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CustomerAddressWhereInputObjectSchema).optional().nullable()
}).strict();
export const CustomerAddressNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CustomerAddressNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressNullableScalarRelationFilter>;
export const CustomerAddressNullableScalarRelationFilterObjectZodSchema = makeSchema();
