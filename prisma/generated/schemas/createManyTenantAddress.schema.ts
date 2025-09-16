import { z } from 'zod';
import { TenantAddressCreateManyInputObjectSchema } from './objects/TenantAddressCreateManyInput.schema';

export const TenantAddressCreateManySchema = z.object({ data: z.union([ TenantAddressCreateManyInputObjectSchema, z.array(TenantAddressCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })