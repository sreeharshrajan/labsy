import { z } from 'zod';
import { TenantUserRoleUpdateManyMutationInputObjectSchema } from './objects/TenantUserRoleUpdateManyMutationInput.schema';
import { TenantUserRoleWhereInputObjectSchema } from './objects/TenantUserRoleWhereInput.schema';

export const TenantUserRoleUpdateManySchema = z.object({ data: TenantUserRoleUpdateManyMutationInputObjectSchema, where: TenantUserRoleWhereInputObjectSchema.optional()  })