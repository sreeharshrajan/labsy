import { z } from 'zod';
import { TenantRoleCreateManyInputObjectSchema } from './objects/TenantRoleCreateManyInput.schema';

export const TenantRoleCreateManySchema = z.object({ data: z.union([ TenantRoleCreateManyInputObjectSchema, z.array(TenantRoleCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })