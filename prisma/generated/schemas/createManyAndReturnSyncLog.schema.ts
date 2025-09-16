import { z } from 'zod';
import { SyncLogSelectObjectSchema } from './objects/SyncLogSelect.schema';
import { SyncLogCreateManyInputObjectSchema } from './objects/SyncLogCreateManyInput.schema';

export const SyncLogCreateManyAndReturnSchema = z.object({ select: SyncLogSelectObjectSchema.optional(), data: z.union([ SyncLogCreateManyInputObjectSchema, z.array(SyncLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()