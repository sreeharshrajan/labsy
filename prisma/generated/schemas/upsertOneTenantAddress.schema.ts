import { z } from 'zod';
import { TenantAddressSelectObjectSchema } from './objects/TenantAddressSelect.schema';
import { TenantAddressIncludeObjectSchema } from './objects/TenantAddressInclude.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './objects/TenantAddressWhereUniqueInput.schema';
import { TenantAddressCreateInputObjectSchema } from './objects/TenantAddressCreateInput.schema';
import { TenantAddressUncheckedCreateInputObjectSchema } from './objects/TenantAddressUncheckedCreateInput.schema';
import { TenantAddressUpdateInputObjectSchema } from './objects/TenantAddressUpdateInput.schema';
import { TenantAddressUncheckedUpdateInputObjectSchema } from './objects/TenantAddressUncheckedUpdateInput.schema';

export const TenantAddressUpsertSchema = z.object({ select: TenantAddressSelectObjectSchema.optional(), include: TenantAddressIncludeObjectSchema.optional(), where: TenantAddressWhereUniqueInputObjectSchema, create: z.union([ TenantAddressCreateInputObjectSchema, TenantAddressUncheckedCreateInputObjectSchema ]), update: z.union([ TenantAddressUpdateInputObjectSchema, TenantAddressUncheckedUpdateInputObjectSchema ])  })