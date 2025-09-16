import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressUpdateManyMutationInputObjectSchema } from './objects/TenantAddressUpdateManyMutationInput.schema';
import { TenantAddressWhereInputObjectSchema } from './objects/TenantAddressWhereInput.schema';

export const TenantAddressUpdateManyAndReturnSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), data: TenantAddressUpdateManyMutationInputObjectSchema, where: TenantAddressWhereInputObjectSchema.optional()  }).strict()