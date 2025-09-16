import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogIncludeObjectSchema } from './objects/SyncLogInclude.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';
import { SyncLogCreateInputObjectSchema } from './objects/SyncLogCreateInput.schema';
import { SyncLogUncheckedCreateInputObjectSchema } from './objects/SyncLogUncheckedCreateInput.schema';
import { SyncLogUpdateInputObjectSchema } from './objects/SyncLogUpdateInput.schema';
import { SyncLogUncheckedUpdateInputObjectSchema } from './objects/SyncLogUncheckedUpdateInput.schema';

export const SyncLogUpsertSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), where: SyncLogWhereUniqueInputObjectSchema, create: z.union([ SyncLogCreateInputObjectSchema, SyncLogUncheckedCreateInputObjectSchema ]), update: z.union([ SyncLogUpdateInputObjectSchema, SyncLogUncheckedUpdateInputObjectSchema ])  })