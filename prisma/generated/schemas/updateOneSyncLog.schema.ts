import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogIncludeObjectSchema } from './objects/SyncLogInclude.schema';
import { SyncLogUpdateInputObjectSchema } from './objects/SyncLogUpdateInput.schema';
import { SyncLogUncheckedUpdateInputObjectSchema } from './objects/SyncLogUncheckedUpdateInput.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';

export const SyncLogUpdateOneSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), data: z.union([SyncLogUpdateInputObjectSchema, SyncLogUncheckedUpdateInputObjectSchema]), where: SyncLogWhereUniqueInputObjectSchema  })