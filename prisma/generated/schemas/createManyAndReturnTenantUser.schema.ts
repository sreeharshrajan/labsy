import { z } from 'zod';
import { TenantUserSelectObjectSchema } from './objects/TenantUserSelect.schema';
import { TenantUserCreateManyInputObjectSchema } from './objects/TenantUserCreateManyInput.schema';

export const TenantUserCreateManyAndReturnSchema = z.object({ select: TenantUserSelectObjectSchema.optional(), data: z.union([ TenantUserCreateManyInputObjectSchema, z.array(TenantUserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()