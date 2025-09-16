import { z } from 'zod';
import { TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantCreateManyInputObjectSchema } from './objects/TenantCreateManyInput.schema';

export const TenantCreateManyAndReturnSchema = z.object({ select: TenantSelectObjectSchema.optional(), data: z.union([ TenantCreateManyInputObjectSchema, z.array(TenantCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()