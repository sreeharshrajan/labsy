import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerTypeSchema } from '../enums/CustomerType.schema';
import { NestedEnumCustomerTypeNullableFilterObjectSchema } from './NestedEnumCustomerTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: CustomerTypeSchema.optional().nullable(),
  in: CustomerTypeSchema.array().optional().nullable(),
  notIn: CustomerTypeSchema.array().optional().nullable(),
  not: z.union([CustomerTypeSchema, z.lazy(() => NestedEnumCustomerTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumCustomerTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumCustomerTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumCustomerTypeNullableFilter>;
export const EnumCustomerTypeNullableFilterObjectZodSchema = makeSchema();
