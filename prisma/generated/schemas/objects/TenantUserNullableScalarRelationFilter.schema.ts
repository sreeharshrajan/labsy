import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TenantUserWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TenantUserWhereInputObjectSchema).optional().nullable()
}).strict();
export const TenantUserNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TenantUserNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserNullableScalarRelationFilter>;
export const TenantUserNullableScalarRelationFilterObjectZodSchema = makeSchema();
