import { z } from 'zod';
import { SyncLogUpdateManyMutationInputObjectSchema } from './objects/SyncLogUpdateManyMutationInput.schema';
import { SyncLogWhereInputObjectSchema } from './objects/SyncLogWhereInput.schema';

export const SyncLogUpdateManySchema = z.object({ data: SyncLogUpdateManyMutationInputObjectSchema, where: SyncLogWhereInputObjectSchema.optional()  })