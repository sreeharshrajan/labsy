import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TenantUserWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TenantUserWhereInputObjectSchema).optional()
}).strict();
export const TenantUserScalarRelationFilterObjectSchema: z.ZodType<Prisma.TenantUserScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserScalarRelationFilter>;
export const TenantUserScalarRelationFilterObjectZodSchema = makeSchema();
