import { z } from 'zod';
import { TenantAddressWhereInputObjectSchema } from './objects/TenantAddressWhereInput.schema';

export const TenantAddressDeleteManySchema = z.object({ where: TenantAddressWhereInputObjectSchema.optional()  })