import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserRoleWhereInputObjectSchema } from './TenantUserRoleWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TenantUserRoleWhereInputObjectSchema).optional(),
  some: z.lazy(() => TenantUserRoleWhereInputObjectSchema).optional(),
  none: z.lazy(() => TenantUserRoleWhereInputObjectSchema).optional()
}).strict();
export const TenantUserRoleListRelationFilterObjectSchema: z.ZodType<Prisma.TenantUserRoleListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleListRelationFilter>;
export const TenantUserRoleListRelationFilterObjectZodSchema = makeSchema();
