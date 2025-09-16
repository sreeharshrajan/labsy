import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogUpdateManyMutationInputObjectSchema } from './objects/SyncLogUpdateManyMutationInput.schema';
import { SyncLogWhereInputObjectSchema } from './objects/SyncLogWhereInput.schema';

export const SyncLogUpdateManyAndReturnSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), data: SyncLogUpdateManyMutationInputObjectSchema, where: SyncLogWhereInputObjectSchema.optional()  }).strict()