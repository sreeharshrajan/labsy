import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogWhereInputObjectSchema } from './SyncLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SyncLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => SyncLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => SyncLogWhereInputObjectSchema).optional()
}).strict();
export const SyncLogListRelationFilterObjectSchema: z.ZodType<Prisma.SyncLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogListRelationFilter>;
export const SyncLogListRelationFilterObjectZodSchema = makeSchema();
