import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogWhereInputObjectSchema } from './AuditLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AuditLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => AuditLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => AuditLogWhereInputObjectSchema).optional()
}).strict();
export const AuditLogListRelationFilterObjectSchema: z.ZodType<Prisma.AuditLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogListRelationFilter>;
export const AuditLogListRelationFilterObjectZodSchema = makeSchema();
