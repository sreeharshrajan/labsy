import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressIncludeObjectSchema } from './objects/TenantAddressInclude.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';

export const TenantAddressDeleteOneSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), where: TenantAddressWhereUniqueInputObjectSchema  })