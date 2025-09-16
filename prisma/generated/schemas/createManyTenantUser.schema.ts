import { z } from 'zod';
import { TenantUserCreateManyInputObjectSchema } from './objects/TenantUserCreateManyInput.schema';

export const TenantUserCreateManySchema = z.object({ data: z.union([ TenantUserCreateManyInputObjectSchema, z.array(TenantUserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })