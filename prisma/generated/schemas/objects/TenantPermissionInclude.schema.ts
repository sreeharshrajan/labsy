import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleArgsObjectSchema } from './TenantRoleArgs.schema'

const makeSchema = () => z.object({
  role: z.union([z.boolean(), z.lazy(() => TenantRoleArgsObjectSchema)]).optional()
}).strict();
export const TenantPermissionIncludeObjectSchema: z.ZodType<Prisma.TenantPermissionInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantPermissionInclude>;
export const TenantPermissionIncludeObjectZodSchema = makeSchema();
