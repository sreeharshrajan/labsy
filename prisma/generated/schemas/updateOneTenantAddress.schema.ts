import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressIncludeObjectSchema } from './objects/TenantAddressInclude.schema';
import { TenantAddressUpdateInputObjectSchema } from './objects/TenantAddressUpdateInput.schema';
import { TenantAddressUncheckedUpdateInputObjectSchema } from './objects/TenantAddressUncheckedUpdateInput.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';

export const TenantAddressUpdateOneSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), data: z.union([TenantAddressUpdateInputObjectSchema, TenantAddressUncheckedUpdateInputObjectSchema]), where: TenantAddressWhereUniqueInputObjectSchema  })