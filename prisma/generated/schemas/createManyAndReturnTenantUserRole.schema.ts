import { z } from 'zod';
import { TenantUserRoleSelectObjectSchema } from './objects/TenantUserRoleSelect.schema';
import { TenantUserRoleCreateManyInputObjectSchema } from './objects/TenantUserRoleCreateManyInput.schema';

export const TenantUserRoleCreateManyAndReturnSchema = z.object({ select: TenantUserRoleSelectObjectSchema.optional(), data: z.union([ TenantUserRoleCreateManyInputObjectSchema, z.array(TenantUserRoleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()