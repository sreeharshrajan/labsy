import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional()
}).strict();
export const SyncLogIncludeObjectSchema: z.ZodType<Prisma.SyncLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogInclude>;
export const SyncLogIncludeObjectZodSchema = makeSchema();
