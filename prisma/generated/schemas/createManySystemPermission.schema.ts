import { z } from 'zod';
import { SystemPermissionCreateManyInputObjectSchema } from './objects/SystemPermissionCreateManyInput.schema';

export const SystemPermissionCreateManySchema = z.object({ data: z.union([ SystemPermissionCreateManyInputObjectSchema, z.array(SystemPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })