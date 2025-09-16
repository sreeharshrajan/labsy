import { z } from 'zod';
import { TenantPermissionSelectObjectSchema } from './objects/TenantPermissionSelect.schema';
import { TenantPermissionCreateManyInputObjectSchema } from './objects/TenantPermissionCreateManyInput.schema';

export const TenantPermissionCreateManyAndReturnSchema = z.object({ select: TenantPermissionSelectObjectSchema.optional(), data: z.union([ TenantPermissionCreateManyInputObjectSchema, z.array(TenantPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()