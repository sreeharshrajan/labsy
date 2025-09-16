import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionSelectObjectSchema } from './SystemPermissionSelect.schema';
import { SystemPermissionIncludeObjectSchema } from './SystemPermissionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SystemPermissionSelectObjectSchema).optional(),
  include: z.lazy(() => SystemPermissionIncludeObjectSchema).optional()
}).strict();
export const SystemPermissionArgsObjectSchema = makeSchema();
export const SystemPermissionArgsObjectZodSchema = makeSchema();
