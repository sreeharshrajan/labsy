import { z } from 'zod';
import { TenantPermissionCreateManyInputObjectSchema } from './objects/TenantPermissionCreateManyInput.schema';

export const TenantPermissionCreateManySchema = z.object({ data: z.union([ TenantPermissionCreateManyInputObjectSchema, z.array(TenantPermissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })