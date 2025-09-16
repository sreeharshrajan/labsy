import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressIncludeObjectSchema } from './objects/TenantAddressInclude.schema';
import { TenantAddressCreateInputObjectSchema } from './objects/TenantAddressCreateInput.schema';
import { TenantAddressUncheckedCreateInputObjectSchema } from './objects/TenantAddressUncheckedCreateInput.schema';

export const TenantAddressCreateOneSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), data: z.union([TenantAddressCreateInputObjectSchema, TenantAddressUncheckedCreateInputObjectSchema])  })