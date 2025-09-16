import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogSelectObjectSchema } from './AuditLogSelect.schema';
import { AuditLogIncludeObjectSchema } from './AuditLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AuditLogSelectObjectSchema).optional(),
  include: z.lazy(() => AuditLogIncludeObjectSchema).optional()
}).strict();
export const AuditLogArgsObjectSchema = makeSchema();
export const AuditLogArgsObjectZodSchema = makeSchema();
