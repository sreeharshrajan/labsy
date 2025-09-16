import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereInputObjectSchema } from './TenantAddressWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TenantAddressWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TenantAddressWhereInputObjectSchema).optional().nullable()
}).strict();
export const TenantAddressNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TenantAddressNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressNullableScalarRelationFilter>;
export const TenantAddressNullableScalarRelationFilterObjectZodSchema = makeSchema();
