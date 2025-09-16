import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TenantUserWhereInputObjectSchema).optional(),
  some: z.lazy(() => TenantUserWhereInputObjectSchema).optional(),
  none: z.lazy(() => TenantUserWhereInputObjectSchema).optional()
}).strict();
export const TenantUserListRelationFilterObjectSchema: z.ZodType<Prisma.TenantUserListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserListRelationFilter>;
export const TenantUserListRelationFilterObjectZodSchema = makeSchema();
