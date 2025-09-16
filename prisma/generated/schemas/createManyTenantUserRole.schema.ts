import { z } from 'zod';
import { TenantUserRoleCreateManyInputObjectSchema } from './objects/TenantUserRoleCreateManyInput.schema';

export const TenantUserRoleCreateManySchema = z.object({ data: z.union([ TenantUserRoleCreateManyInputObjectSchema, z.array(TenantUserRoleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })