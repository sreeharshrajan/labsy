import { z } from 'zod';
import { SyncLogWhereInputObjectSchema } from './objects/SyncLogWhereInput.schema';

export const SyncLogDeleteManySchema = z.object({ where: SyncLogWhereInputObjectSchema.optional()  })