import { z } from 'zod';
import { TenantRoleSelectObjectSchema } from './objects/TenantRoleSelect.schema';
import { TenantRoleCreateManyInputObjectSchema } from './objects/TenantRoleCreateManyInput.schema';

export const TenantRoleCreateManyAndReturnSchema = z.object({ select: TenantRoleSelectObjectSchema.optional(), data: z.union([ TenantRoleCreateManyInputObjectSchema, z.array(TenantRoleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()