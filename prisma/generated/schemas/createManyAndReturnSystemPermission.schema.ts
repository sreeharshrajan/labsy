import { z } from 'zod';
import { SystemPermissionSelectObjectSchema } from './objects/SystemPermissionSelect.schema';
import { SystemPermissionCreateManyInputObjectSchema } from './objects/SystemPermissionCreateManyInput.schema';

export const SystemPermissionCreateManyAndReturnSchema = z.object({ select: SystemPermissionSelectObjectSchema.optional(), data: z.union([ SystemPermissionCreateManyInputObjectSchema, z.array(SystemPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()