import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerTypeSchema } from '../enums/CustomerType.schema'

const nestedenumcustomertypenullablefilterSchema = z.object({
  equals: CustomerTypeSchema.optional().nullable(),
  in: CustomerTypeSchema.array().optional().nullable(),
  notIn: CustomerTypeSchema.array().optional().nullable(),
  not: z.union([CustomerTypeSchema, z.lazy(() => NestedEnumCustomerTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumCustomerTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumCustomerTypeNullableFilter> = nestedenumcustomertypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumCustomerTypeNullableFilter>;
export const NestedEnumCustomerTypeNullableFilterObjectZodSchema = nestedenumcustomertypenullablefilterSchema;
