import { z } from 'zod';
import { TenantAddressUpdateManyMutationInputObjectSchema } from './objects/TenantAddressUpdateManyMutationInput.schema';
import { TenantAddressWhereInputObjectSchema } from './objects/TenantAddressWhereInput.schema';

export const TenantAddressUpdateManySchema = z.object({ data: TenantAddressUpdateManyMutationInputObjectSchema, where: TenantAddressWhereInputObjectSchema.optional()  })