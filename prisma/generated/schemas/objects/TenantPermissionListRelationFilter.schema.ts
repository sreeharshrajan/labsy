import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantPermissionWhereInputObjectSchema } from './TenantPermissionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TenantPermissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => TenantPermissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => TenantPermissionWhereInputObjectSchema).optional()
}).strict();
export const TenantPermissionListRelationFilterObjectSchema: z.ZodType<Prisma.TenantPermissionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionListRelationFilter>;
export const TenantPermissionListRelationFilterObjectZodSchema = makeSchema();
