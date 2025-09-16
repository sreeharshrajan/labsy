import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const NotificationIncludeObjectSchema: z.ZodType<Prisma.NotificationInclude> = makeSchema() as unknown as z.ZodType<Prisma.NotificationInclude>;
export const NotificationIncludeObjectZodSchema = makeSchema();
