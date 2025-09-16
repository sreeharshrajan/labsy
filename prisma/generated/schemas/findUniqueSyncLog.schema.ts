import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogIncludeObjectSchema } from './objects/SyncLogInclude.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';

export const SyncLogFindUniqueSchema: z.ZodType<Prisma.SyncLogFindUniqueArgs> = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), where: SyncLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SyncLogFindUniqueArgs>;

export const SyncLogFindUniqueZodSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), where: SyncLogWhereUniqueInputObjectSchema }).strict();