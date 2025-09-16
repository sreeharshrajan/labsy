import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleWhereInputObjectSchema } from './TenantRoleWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TenantRoleWhereInputObjectSchema).optional(),
  some: z.lazy(() => TenantRoleWhereInputObjectSchema).optional(),
  none: z.lazy(() => TenantRoleWhereInputObjectSchema).optional()
}).strict();
export const TenantRoleListRelationFilterObjectSchema: z.ZodType<Prisma.TenantRoleListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleListRelationFilter>;
export const TenantRoleListRelationFilterObjectZodSchema = makeSchema();
