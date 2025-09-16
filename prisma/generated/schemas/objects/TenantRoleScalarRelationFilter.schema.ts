import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TenantRoleWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TenantRoleWhereInputObjectSchema).optional()
}).strict();
export const TenantRoleScalarRelationFilterObjectSchema: z.ZodType<Prisma.TenantRoleScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleScalarRelationFilter>;
export const TenantRoleScalarRelationFilterObjectZodSchema = makeSchema();
