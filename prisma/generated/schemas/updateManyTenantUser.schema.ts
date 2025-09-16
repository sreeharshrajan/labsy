import { z } from 'zod';
import { TenantUserUpdateManyMutationInputObjectSchema } from './objects/TenantUserUpdateManyMutationInput.schema';
import { TenantUserWhereInputObjectSchema } from './objects/TenantUserWhereInput.schema';

export const TenantUserUpdateManySchema = z.object({ data: TenantUserUpdateManyMutationInputObjectSchema, where: TenantUserWhereInputObjectSchema.optional()  })