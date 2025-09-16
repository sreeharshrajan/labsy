import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogIncludeObjectSchema } from './objects/SyncLogInclude.schema';
import { SyncLogWhereUniqueInputObjectSchema } from './objects/SyncLogWhereUniqueInput.schema';

export const SyncLogDeleteOneSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), include: SyncLogIncludeObjectSchema.optional(), where: SyncLogWhereUniqueInputObjectSchema  })