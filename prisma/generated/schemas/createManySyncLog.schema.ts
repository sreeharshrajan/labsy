import { z } from 'zod';
import { SyncLogCreateManyInputObjectSchema } from './objects/SyncLogCreateManyInput.schema';

export const SyncLogCreateManySchema = z.object({ data: z.union([ SyncLogCreateManyInputObjectSchema, z.array(SyncLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })