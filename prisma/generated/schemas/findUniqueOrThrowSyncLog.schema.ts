import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogIncludeObjectSchema } from './objects/SyncLogInclude.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';

export const SyncLogFindUniqueOrThrowSchema: z.ZodType<Prisma.SyncLogFindUniqueOrThrowArgs> = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), where: SyncLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SyncLogFindUniqueOrThrowArgs>;

export const SyncLogFindUniqueOrThrowZodSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), where: SyncLogWhereUniqueInputObjectSchema }).strict();