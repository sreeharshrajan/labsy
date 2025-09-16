import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogIncludeObjectSchema } from './objects/SyncLogInclude.schema';
import { SyncLogCreateInputObjectSchema } from './objects/SyncLogCreateInput.schema';
import { SyncLogUncheckedCreateInputObjectSchema } from './objects/SyncLogUncheckedCreateInput.schema';

export const SyncLogCreateOneSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), data: z.union([SyncLogCreateInputObjectSchema, SyncLogUncheckedCreateInputObjectSchema])  })