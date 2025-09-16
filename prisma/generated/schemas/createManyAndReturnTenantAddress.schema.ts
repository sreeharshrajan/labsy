import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressCreateManyInputObjectSchema } from './objects/TenantAddressCreateManyInput.schema';

export const TenantAddressCreateManyAndReturnSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), data: z.union([ TenantAddressCreateManyInputObjectSchema, z.array(TenantAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()